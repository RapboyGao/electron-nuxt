import type { ForgeConfig } from '@electron-forge/shared-types';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function prerenderer(
  forgeConfig: ForgeConfig,
  platform: string,
  arch: string
): Promise<void> {
  console.log('Prerendering Nuxt application...');

  return new Promise((resolve, reject) => {
    const nuxtBuild = spawn('pnpm', ['nuxi', 'build'], {
      cwd: __dirname,
      stdio: 'inherit',
      shell: true,
    });

    nuxtBuild.on('close', (code) => {
      if (code === 0) {
        console.log('Nuxt build completed successfully');
        resolve();
      } else {
        reject(new Error(`Nuxt build failed with code ${code}`));
      }
    });

    nuxtBuild.on('error', (error) => {
      reject(error);
    });
  });
}
