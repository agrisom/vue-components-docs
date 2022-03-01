const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const filename = 'src/assets/sprite-icons.svg';

exec('svg-sprite-generate -d ./src/assets/icons -o ./src/assets/sprite-icons.svg', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);

  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      // check and handle err
    }
    const idx = data.indexOf('\n');
    let linesExceptFirst = data.substring(idx + 1);
    fs.writeFileSync(filename, linesExceptFirst);

    generateIconNameTypescriptDefinitions();
  });
});

function generateIconNameTypescriptDefinitions() {

  const iconsDir = path.resolve(__dirname, 'src/assets/icons');
  const definitionsFile = path.resolve(__dirname, 'src/assets/Icon.type.ts');
  const files = fs.readdirSync(iconsDir);
  const iconNames = files.map(file => file.match(/^(.+)\.svg$/)[1]);

  const typescriptDefinitions = `
/*
 * ARCHIVO AUTOGENERADO - NO EDITAR
 * Generado por el comando 'npm run svg-icons'
 */

export const iconList = [
  ${iconNames.map(name => `'${name}'`).join(',\n  ')},
] as const;

export type IconName = (typeof iconList)[number];
`;

  fs.writeFileSync(definitionsFile, typescriptDefinitions);

}
