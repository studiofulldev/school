import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const directory = path.join(root, 'canvas');
const output = path.join(root, 'modulo-2-canvas.imscc');
const entries = [];
function collect(folder) {
  for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
    const absolute = path.join(folder, item.name);
    if (item.isDirectory()) collect(absolute);
    else entries.push({ name: path.relative(directory, absolute).replaceAll('\\', '/'), data: fs.readFileSync(absolute) });
  }
}
collect(directory);
entries.sort((a, b) => a.name.localeCompare(b.name));
if (!entries.some(item => item.name === 'imsmanifest.xml')) throw new Error('Manifesto ausente');

const table = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let value = n;
  for (let bit = 0; bit < 8; bit++) value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
  table[n] = value >>> 0;
}
function crc32(data) {
  let value = 0xffffffff;
  for (const byte of data) value = table[(value ^ byte) & 255] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}
// ZIP sem compressão: os arquivos textuais são pequenos e o formato é aceito pelo Canvas.
const local = [];
const central = [];
let offset = 0;
for (const entry of entries) {
  const name = Buffer.from(entry.name, 'utf8');
  const size = entry.data.length;
  const crc = crc32(entry.data);
  const header = Buffer.alloc(30);
  header.writeUInt32LE(0x04034b50, 0);
  header.writeUInt16LE(20, 4);
  header.writeUInt16LE(0x0800, 6); // nomes UTF-8
  header.writeUInt16LE(0, 8); // sem compressão
  header.writeUInt16LE(0, 10); // hora fixa
  header.writeUInt16LE(33, 12); // 1980-01-01
  header.writeUInt32LE(crc, 14);
  header.writeUInt32LE(size, 18);
  header.writeUInt32LE(size, 22);
  header.writeUInt16LE(name.length, 26);
  local.push(header, name, entry.data);
  const record = Buffer.alloc(46);
  record.writeUInt32LE(0x02014b50, 0);
  record.writeUInt16LE(20, 4);
  record.writeUInt16LE(20, 6);
  record.writeUInt16LE(0x0800, 8);
  record.writeUInt16LE(0, 10);
  record.writeUInt16LE(0, 12);
  record.writeUInt16LE(33, 14);
  record.writeUInt32LE(crc, 16);
  record.writeUInt32LE(size, 20);
  record.writeUInt32LE(size, 24);
  record.writeUInt16LE(name.length, 28);
  record.writeUInt32LE(offset, 42);
  central.push(record, name);
  offset += header.length + name.length + size;
}
const centralSize = central.reduce((sum, part) => sum + part.length, 0);
const end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0);
end.writeUInt16LE(entries.length, 8);
end.writeUInt16LE(entries.length, 10);
end.writeUInt32LE(centralSize, 12);
end.writeUInt32LE(offset, 16);
fs.writeFileSync(output, Buffer.concat([...local, ...central, end]));
console.log('Pacote Canvas gerado: ' + entries.length + ' arquivos, ' + fs.statSync(output).size + ' bytes.');
