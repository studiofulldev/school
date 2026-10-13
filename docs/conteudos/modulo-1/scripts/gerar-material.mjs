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
const source = fs.readFileSync(path.join(root, 'modulo-1.md'), 'utf8');
const pages = [...source.matchAll(/<!-- pagina: ([a-z0-9-]+) -->\s*([\s\S]*?)(?=<!-- pagina:|$)/g)].map(match => {
  const title = match[2].match(/^# (.+)$/m)?.[1];
  if (!title) throw new Error(`Página sem título: ${match[1]}`);
  return { slug: match[1], source: match[2].trim(), title, id: `m1_${match[1].replaceAll('-', '_')}` };
});
if (pages.length !== 9 || new Set(pages.map(p => p.slug)).size !== 9) throw new Error('Esperadas nove páginas distintas');
const toc = `<nav aria-label="Conteúdo do módulo"><p><strong>Conteúdo do módulo</strong></p><ol>${pages.map(p => `<li><a href="#${p.slug}">${esc(p.title)}</a></li>`).join('')}</ol></nav>`;
write('modulo-1.html', `<!DOCTYPE html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Módulo 1 Introdução ao Mundo da Computação</title><style>${css}</style></head><body><main><h1>Módulo 1 Introdução ao Mundo da Computação</h1><p>Descobrindo o Mundo Tech · FullDev School</p>${toc}${pages.map(p => `<section id="${p.slug}">${markdown(p.source, 'imagens/', `${p.slug}-`, true)}</section>`).join('\n')}</main></body></html>`);

const figures = [];
const box = (x, y, w, h, title, lines, color = '#eaf2fa') => ({ x, y, w, h, title, lines, color });
const arrow = (x1, y1, x2, y2) => ({ x1, y1, x2, y2 });
figures.push({ name:'01-fluxo-da-informacao', width:1600, height:660, title:'Como uma compra vira informação', subtitle:'O mesmo problema pode ser descrito por dados, operações e resultados.',
  boxes:[box(60,190,330,245,'ENTRADA',['2 cadernos × R$ 12,00','1 caneta × R$ 4,00']),box(445,190,330,245,'PROCESSAMENTO',['Multiplicar e somar','2 × 12 + 4']),box(830,190,330,245,'SAÍDA',['Total da compra','R$ 28,00']),box(1215,190,325,245,'ARMAZENAMENTO',['Guardar o registro','Consultar depois'])],
  arrows:[arrow(395,312,435,312),arrow(780,312,820,312),arrow(1165,312,1205,312)],notes:['Sequência didática. Sistemas reais podem consultar e armazenar dados em diferentes etapas.'] });
figures.push({ name:'02-algoritmo-de-inscricao',width:1600,height:1060,title:'Um algoritmo para inscrições',subtitle:'Validar os dados e atualizar a disponibilidade evita confirmações incorretas.',
  boxes:[box(570,150,460,115,'RECEBER',['Nome e vagas disponíveis']),box(570,320,460,115,'VALIDAR',['Os dados são válidos?']),box(60,490,410,140,'SE NÃO',['Solicitar correção','Antes de continuar'],'#fff3df'),box(570,490,460,140,'SE SIM',['Verificar se há vaga']),box(180,730,490,190,'COM VAGA',['Confirmar a inscrição','Diminuir vagas em 1'],'#e4f3ed'),box(920,730,490,190,'SEM VAGA',['Registrar na lista de espera','Manter vagas em 0'],'#fff3df')],
  arrows:[arrow(800,267,800,306),arrow(570,375,267,479),arrow(800,438,800,478),arrow(715,635,427,715),arrow(890,635,1165,715)],notes:['Exemplo com inscrições válidas feitas uma de cada vez. Pedidos simultâneos exigem outras regras.'] });
figures.push({name:'03-areas-da-computacao',width:1600,height:720,title:'Trabalhos que se conectam',subtitle:'Focos frequentes. As áreas se sobrepõem e os nomes variam entre organizações.',
  boxes:[box(60,190,460,330,'CIÊNCIA DA COMPUTAÇÃO',['Investigar métodos','Estudar algoritmos','Exemplo: comparar maneiras','de ordenar inscrições']),box(570,190,460,330,'DESENVOLVIMENTO',['Construir a aplicação','Testar e manter programas','Exemplo: implementar','o formulário da oficina']),box(1080,190,460,330,'TECNOLOGIA DA INFORMAÇÃO',['Sustentar os serviços','Administrar acesso e recursos','Exemplo: garantir conexão','e cópias de segurança'])],
  arrows:[],notes:['Uma solução exige compreender o problema, construir o sistema e cuidar de seu funcionamento.'] });
figures.push({name:'04-evolucao-da-computacao',width:1600,height:900,title:'Mudanças na história da computação',subtitle:'Cada etapa destaca uma possibilidade. Tecnologias de épocas diferentes coexistem.',
  boxes:[box(60,170,460,240,'1 REPRESENTAR E CALCULAR',['Registros e instrumentos','Máquinas mecânicas','Pascalina: século XVII']),box(570,170,460,240,'2 PROGRAMAR MÁQUINAS',['Instruções para outras tarefas','Projetos de Babbage','Notas de Ada: 1843']),box(1080,170,460,240,'3 CALCULAR ELETRONICAMENTE',['Circuitos com válvulas','Programa armazenado','ENIAC apresentado: 1946']),box(1080,475,460,240,'4 MINIATURIZAR CIRCUITOS',['Transistor: 1947','Circuitos integrados','Equipamentos menores']),box(570,475,460,240,'5 INTEGRAR PROCESSAMENTO',['Microprocessadores','Funções reunidas em chips','Intel 4004: 1971']),box(60,475,460,240,'6 AMPLIAR O ACESSO',['Computadores pessoais','Casas e escritórios','Expansão nos anos 1970 e 1980'])],
  arrows:[arrow(525,290,560,290),arrow(1035,290,1070,290),arrow(1310,418,1310,462),arrow(1070,595,1035,595),arrow(560,595,525,595)],notes:['Não há um único inventor de toda a computação. Datas são referências para compreender mudanças.'] });
figures.push({name:'05-dispositivos-internet-e-servicos',width:1600,height:720,title:'Dispositivos redes e serviços',subtitle:'Uma aplicação pode combinar processamento local e recursos remotos.',
  boxes:[box(60,195,410,270,'DISPOSITIVOS',['Smartphone ou computador','Programas e sensores','Processamento local']),box(590,195,420,270,'INTERNET',['Interconexão de redes','Protocolos de comunicação','Transporte de dados']),box(1130,195,410,270,'SERVIDORES FÍSICOS',['Dados e serviços remotos','Documentos e mapas','Recursos em nuvem'])],
  arrows:[arrow(480,315,580,315),arrow(580,360,480,360),arrow(1020,315,1120,315),arrow(1120,360,1020,360)],notes:['Web é um serviço que usa a Internet. Uma aplicação online pode funcionar sem IA.','Nuvem descreve a oferta e o gerenciamento de recursos. Os equipamentos continuam físicos.'] });
write('scripts/diagramas.json', JSON.stringify(figures, null, 2));
for (const f of figures) {
  const lines = [];
  lines.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${f.width}" height="${f.height}" viewBox="0 0 ${f.width} ${f.height}" role="img" aria-labelledby="title desc"><title id="title">${esc(f.title)}</title><desc id="desc">${esc(f.subtitle + ' ' + f.boxes.map(b => b.title + ': ' + b.lines.join(', ')).join('. '))}</desc><defs><marker id="arrow" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 Z" fill="#266080"/></marker></defs><rect width="100%" height="100%" fill="#ffffff"/>`);
  lines.push(`<g font-family="Segoe UI,Arial,sans-serif" fill="#162a3a"><text x="60" y="70" font-size="44" font-weight="700">${esc(f.title)}</text><text x="60" y="117" font-size="26">${esc(f.subtitle)}</text>`);
  for (const a of f.arrows) lines.push(`<line x1="${a.x1}" y1="${a.y1}" x2="${a.x2}" y2="${a.y2}" stroke="#266080" stroke-width="4" marker-end="url(#arrow)"/>`);
  for (const b of f.boxes) {
    lines.push(`<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="10" fill="${b.color}" stroke="#b6ccda" stroke-width="2"/>`);
    lines.push(`<text x="${b.x+20}" y="${b.y+45}" font-size="25" font-weight="700">${esc(b.title)}</text>`);
    b.lines.forEach((line,index) => lines.push(`<text x="${b.x+20}" y="${b.y+88+index*42}" font-size="28">${esc(line)}</text>`));
  }
  f.notes.forEach((line,index) => lines.push(`<text x="60" y="${f.height-82+index*38}" font-size="25">${esc(line)}</text>`));
  lines.push('</g></svg>');
  write(`imagens/${f.name}.svg`, lines.join('\n'));
}

for (const p of pages) {
  write(`canvas/wiki_content/${p.slug}.html`, `<!DOCTYPE html>\n<html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(p.title)}</title><meta name="identifier" content="${p.id}"><meta name="editing_roles" content="teachers"><meta name="workflow_state" content="unpublished"><meta name="front_page" content="false"></head><body><div style="max-width:960px;font-family:Arial,sans-serif;line-height:1.65">${markdown(p.source, '$IMS-CC-FILEBASE$/web_resources/imagens/')}</div></body></html>`);
}
const resources = pages.map(p => `<resource identifier="${p.id}" type="webcontent" href="wiki_content/${p.slug}.html"><file href="wiki_content/${p.slug}.html"/>${figures.filter(f => p.source.includes(`${f.name}.png`)).map(f => `<dependency identifierref="img_${f.name.replaceAll('-','_')}"/>`).join('')}</resource>`);
for (const f of figures) resources.push(`<resource identifier="img_${f.name.replaceAll('-','_')}" type="webcontent" href="web_resources/imagens/${f.name}.png"><file href="web_resources/imagens/${f.name}.png"/></resource>`);
resources.push('<resource identifier="m1_canvas_metadata" type="associatedcontent/imscc_xmlv1p1/learning-application-resource" href="course_settings/canvas_export.txt"><file href="course_settings/canvas_export.txt"/><file href="course_settings/module_meta.xml"/></resource>');
write('canvas/imsmanifest.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<manifest xmlns="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1" identifier="fulldev_modulo_1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><metadata><schema>IMS Common Cartridge</schema><schemaversion>1.1.0</schemaversion></metadata><organizations default="m1_organization"><organization identifier="m1_organization" structure="rooted-hierarchy"><item identifier="m1_root"><item identifier="m1_module"><title>Módulo 1 Introdução ao Mundo da Computação</title>${pages.map((p,index) => `<item identifier="m1_item_${index+1}" identifierref="${p.id}"><title>${esc(p.title)}</title></item>`).join('')}</item></item></organization></organizations><resources>${resources.join('\n')}</resources></manifest>`);
write('canvas/course_settings/canvas_export.txt', 'FullDev School. Material próprio do módulo 1.\n');
write('canvas/course_settings/module_meta.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<modules xmlns="http://canvas.instructure.com/xsd/cccv1p0"><module identifier="m1_module"><title>Módulo 1 Introdução ao Mundo da Computação</title><workflow_state>unpublished</workflow_state><position>1</position><require_sequential_progress>false</require_sequential_progress><locked>false</locked><items>${pages.map((p,index) => `<item identifier="m1_item_${index+1}"><content_type>WikiPage</content_type><workflow_state>unpublished</workflow_state><title>${esc(p.title)}</title><identifierref>${p.id}</identifierref><position>${index+1}</position><new_tab>false</new_tab><indent>0</indent></item>`).join('')}</items></module></modules>`);
console.log(`Gerados documento HTML, ${pages.length} páginas, ${figures.length} SVG e metadados de importação.`);
