import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

const outputDir = path.join(__dirname, 'src');
const typesFile = path.join(outputDir, 'petstore-api.ts');

// Create src directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Run openapi-typescript to generate types
const command = `npx openapi-typescript https://petstore3.swagger.io/api/v3/openapi.json --output ${typesFile}`;

console.log('Generating TypeScript types from OpenAPI schema...');
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Successfully generated types at: ${typesFile}`);
});