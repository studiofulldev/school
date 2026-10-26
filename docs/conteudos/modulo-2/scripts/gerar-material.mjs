import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Gerador próprio, limitado aos elementos Markdown usados no material.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const write = (name, value) => {
  const destination = path.join(root, name);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, value, 'utf8');
};
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const slug = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function inline(value, imageBase = 'imagens/') {
  const tokens = [];
  const token = html => `@@TOKEN${tokens.push(html) - 1}@@`;
  let result = value
    .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, (_, alt, url) => token(`<img src="${esc(url.replace('imagens/', imageBase))}" alt="${esc(alt)}" style="max-width:100%;height:auto" loading="lazy" />`))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => token(`<a href="${esc(url)}"${/^https?:\/\//.test(url) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)}</a>`));
  result = esc(result).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>');
  return result.replace(/@@TOKEN(\d+)@@/g, (_, index) => tokens[Number(index)]);
}
function markdown(source, imageBase, prefix = '', main = false) {
  const lines = source.trim().split(/\r?\n/);
  const out = [];
  let i = 0;
  const special = line => /^(#{1,6} |[-*] |\d+\. |```|\|)/.test(line);
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith('```')) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      if (i === lines.length) throw new Error('Bloco de código não fechado');
      i++;
      out.push(`<pre style="white-space:pre-wrap;background:#f1f5f9;padding:16px"><code>${esc(code.join('\n'))}</code></pre>`);
      continue;
    }
    const heading = line.match(/^(#{1,6}) (.+)$/);
    if (heading) {
      const level = main ? Math.min(6, heading[1].length + 1) : heading[1].length;
      out.push(`<h${level} id="${prefix}${slug(heading[2])}">${inline(heading[2], imageBase)}</h${level}>`);
      i++; continue;
    }
    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        const cells = lines[i++].replace(/^\||\|$/g, '').split('|').map(x => x.trim());
        if (cells.every(x => /^:?-+:?$/.test(x))) continue;
        rows.push(cells);
      }
      if (!rows.length || rows.some(row => row.length !== rows[0].length)) throw new Error('Tabela inconsistente');
      out.push(`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%"><thead><tr>${rows[0].map(x => `<th scope="col" style="text-align:left;border:1px solid #cbd5e1;padding:10px;background:#eaf2fa">${inline(x, imageBase)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(row => `<tr>${row.map(x => `<td style="border:1px solid #cbd5e1;padding:10px">${inline(x, imageBase)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const pattern = ordered ? /^\d+\. / : /^[-*] /;
      const items = [];
      while (i < lines.length && pattern.test(lines[i])) items.push(`<li>${inline(lines[i++].replace(pattern, ''), imageBase)}</li>`);
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.join('')}</${tag}>`);
      continue;
    }
    const paragraph = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !special(lines[i])) paragraph.push(lines[i++]);
    out.push(`<p>${inline(paragraph.join(' '), imageBase)}</p>`);
  }
  return out.join('\n');
}
const css = `body{margin:0;background:#f4f6f8;color:#162a3a;font:18px/1.65 system-ui,Segoe UI,sans-serif}main{max-width:960px;margin:32px auto;padding:40px;background:white}h1,h2,h3{line-height:1.25}h1{font-size:2rem}h2{margin-top:2.2rem}h3{margin-top:1.7rem}a{color:#075985}li{margin-bottom:8px}img{display:block;margin:24px auto}section{margin-top:48px;padding-top:12px}nav{background:#eff6fb;padding:20px}code{font-family:Consolas,monospace}@media(max-width:600px){main{margin:0;padding:20px}body{font-size:17px}}@media print{body{background:white;font-size:11pt}main{max-width:none;margin:0;padding:0}section{break-before:page}h1,h2,h3{break-after:avoid}img,tr{break-inside:avoid}nav{display:none}a{color:inherit}}`;
const source = fs.readFileSync(path.join(root, 'modulo-2.md'), 'utf8');
const pages = [...source.matchAll(/<!-- pagina: ([a-z0-9-]+) -->\s*([\s\S]*?)(?=<!-- pagina:|$)/g)].map(match => {
  const title = match[2].match(/^# (.+)$/m)?.[1];
  if (!title) throw new Error(`Página sem título: ${match[1]}`);
  return { slug: match[1], source: match[2].trim(), title, id: `m2_${match[1].replaceAll('-', '_')}` };
});
if (pages.length !== 11 || new Set(pages.map(p => p.slug)).size !== 11) throw new Error('Esperadas onze páginas distintas');
const localPage = page => markdown(page.source, 'imagens/', `${page.slug}-`, true)
  .replace(/href="\$WIKI_REFERENCE\$\/pages\/([^"]+)"/g, 'href="#$1"');
write('modulo-2.html', `<!DOCTYPE html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Módulo 2 Lógica e Pensamento Computacional</title><style>${css}</style></head><body><main>${pages.map(p => `<section id="${p.slug}">${localPage(p)}</section>`).join('\n')}</main></body></html>`);

for (const p of pages) {
  const frontPage = p.slug === '00-boas-vindas';
  const workflowState = frontPage ? 'active' : 'unpublished';
  const pageStyle = frontPage
    ? 'max-width:960px;margin:0 auto;font-family:Arial,sans-serif;line-height:1.7;color:#1e293b'
    : 'max-width:960px;font-family:Arial,sans-serif;line-height:1.65';
  write(`canvas/wiki_content/${p.slug}.html`, `<!DOCTYPE html>\n<html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(p.title)}</title><meta name="identifier" content="${p.id}"><meta name="editing_roles" content="teachers"><meta name="workflow_state" content="${workflowState}"><meta name="front_page" content="${frontPage}"></head><body><div style="${pageStyle}">${markdown(p.source, '$IMS-CC-FILEBASE$/web_resources/imagens/')}</div></body></html>`);
}
const resources = pages.map(p => `<resource identifier="${p.id}" type="webcontent" href="wiki_content/${p.slug}.html"><file href="wiki_content/${p.slug}.html"/></resource>`);
resources.push('<resource identifier="m2_canvas_metadata" type="associatedcontent/imscc_xmlv1p1/learning-application-resource" href="course_settings/canvas_export.txt"><file href="course_settings/canvas_export.txt"/><file href="course_settings/module_meta.xml"/></resource>');
write('canvas/imsmanifest.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<manifest xmlns="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1" identifier="fulldev_modulo_2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><metadata><schema>IMS Common Cartridge</schema><schemaversion>1.1.0</schemaversion></metadata><organizations default="m2_organization"><organization identifier="m2_organization" structure="rooted-hierarchy"><item identifier="m2_root"><item identifier="m2_module"><title>Módulo 2 Lógica e Pensamento Computacional</title>${pages.map((p,index) => `<item identifier="m2_item_${index+1}" identifierref="${p.id}"><title>${esc(p.title)}</title></item>`).join('')}</item></item></organization></organizations><resources>${resources.join('\n')}</resources></manifest>`);
write('canvas/course_settings/canvas_export.txt', 'FullDev School. Material próprio do módulo 2.\n');
write('canvas/course_settings/module_meta.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<modules xmlns="http://canvas.instructure.com/xsd/cccv1p0"><module identifier="m2_module"><title>Módulo 2 Lógica e Pensamento Computacional</title><workflow_state>unpublished</workflow_state><position>1</position><require_sequential_progress>false</require_sequential_progress><locked>false</locked><items>${pages.map((p,index) => `<item identifier="m2_item_${index+1}"><content_type>WikiPage</content_type><workflow_state>unpublished</workflow_state><title>${esc(p.title)}</title><identifierref>${p.id}</identifierref><position>${index+1}</position><new_tab>false</new_tab><indent>0</indent></item>`).join('')}</items></module></modules>`);
console.log(`Gerados documento HTML, ${pages.length} páginas e metadados de importação.`);
