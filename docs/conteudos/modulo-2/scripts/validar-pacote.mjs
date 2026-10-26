import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const archive = fs.readFileSync(path.join(root, 'modulo-2-canvas.imscc'));
const files = new Map();
let position = 0;
while (position + 4 <= archive.length && archive.readUInt32LE(position) === 0x04034b50) {
  const flags = archive.readUInt16LE(position + 6);
  const method = archive.readUInt16LE(position + 8);
  if (flags !== 0x0800 || method !== 0) throw new Error('Entrada ZIP inesperada');
  const size = archive.readUInt32LE(position + 18);
  const nameLength = archive.readUInt16LE(position + 26);
  const extraLength = archive.readUInt16LE(position + 28);
  const name = archive.subarray(position + 30, position + 30 + nameLength).toString('utf8');
  const start = position + 30 + nameLength + extraLength;
  if (name.startsWith('/') || name.includes('..') || files.has(name)) throw new Error('Caminho ZIP inválido: ' + name);
  files.set(name, archive.subarray(start, start + size).toString('utf8'));
  position = start + size;
}
const fail = message => { throw new Error(message); };
if (archive.readUInt32LE(position) !== 0x02014b50) fail('Diretório ZIP ausente');
if (archive.readUInt32LE(archive.length - 22) !== 0x06054b50) fail('Fim ZIP ausente');
if (archive.readUInt16LE(archive.length - 12) !== files.size) fail('Contagem ZIP inconsistente');
const manifest = files.get('imsmanifest.xml') || fail('Manifesto ausente');
const metadata = files.get('course_settings/module_meta.xml') || fail('Metadados ausentes');
if (!manifest.includes('<schemaversion>1.1.0</schemaversion>')) fail('Versão do pacote incorreta');
const pages = [...files.keys()].filter(name => /^wiki_content\/.+\.html$/.test(name));
if (pages.length !== 11) fail('Esperadas 11 páginas');
if ([...files.keys()].some(name => /educador|gabarito|\.md$|\.mp4$/i.test(name))) fail('Material privado no pacote');
const resourceIds = [...manifest.matchAll(/<resource identifier="([^"]+)"/g)].map(match => match[1]);
if (new Set(resourceIds).size !== resourceIds.length) fail('Recursos duplicados');
for (const match of manifest.matchAll(/<file href="([^"]+)"/g)) if (!files.has(match[1])) fail('Arquivo ausente: ' + match[1]);
for (const match of manifest.matchAll(/identifierref="([^"]+)"/g)) if (!resourceIds.includes(match[1])) fail('Recurso ausente: ' + match[1]);
const items = [...metadata.matchAll(/<item identifier="m2_item_/g)];
if (items.length !== 11) fail('Itens do módulo incompletos');
const welcome = files.get('wiki_content/00-boas-vindas.html') || fail('Boas-vindas ausente');
if (!welcome.includes('name="front_page" content="true"') || !welcome.includes('name="workflow_state" content="active"')) fail('Página inicial incorreta');
if ([...welcome.matchAll(/\$WIKI_REFERENCE\$\/pages\/([a-z0-9-]+)/g)].length !== 10) fail('Índice incompleto');
for (const page of pages) {
  const html = files.get(page);
  if (!html.includes('lang="pt-BR"') || /<script|<iframe|@@TOKEN|<!-- pagina:/.test(html)) fail('Página HTML inválida: ' + page);
  if (page !== 'wiki_content/00-boas-vindas.html' && !html.includes('name="workflow_state" content="unpublished"')) fail('Página publicada indevidamente');
}
const combined = fs.readFileSync(path.join(root, 'modulo-2.html'), 'utf8');
if ([...combined.matchAll(/<section id="[^"]+"/g)].length !== 11) fail('HTML consolidado incompleto');
for (const slug of [...welcome.matchAll(/\$WIKI_REFERENCE\$\/pages\/([a-z0-9-]+)/g)].map(match => match[1])) {
  if (!files.has('wiki_content/' + slug + '.html')) fail('Link interno sem página: ' + slug);
}
console.log('Validação local: ZIP, 11 páginas, índice, links internos, manifesto, estados e exclusão do guia docente OK. Importação real no Canvas não executada.');
