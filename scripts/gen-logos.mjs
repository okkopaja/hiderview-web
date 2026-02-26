import * as si from '../node_modules/simple-icons/index.mjs';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const outputDir = join('public', 'logos', 'companies');
mkdirSync(outputDir, { recursive: true });

const icons = {
  infosys: si.siInfosys,
  meta: si.siMeta,
};

for (const [name, icon] of Object.entries(icons)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${icon.path}"/></svg>`;
  writeFileSync(join(outputDir, `${name}.svg`), svg);
  console.log('Wrote', name);
}
