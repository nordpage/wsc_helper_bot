// import { readFileSync } from 'node:fs';
// import { dirname, resolve } from 'node:path';
// import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/wsc_helper_bot/',
  plugins: [react(), tsconfigPaths(), vercel()],
  // Uncomment the next lines in case, you would like to run Vite dev server using HTTPS and in case,
  // you have key and certificate. You retrieve your certificate and key using mkcert.
  // Learn more:
  // https://docs.telegram-mini-apps.com/platform/getting-app-link#mkcert
  //
  // server: {
  //   port: 443,
  //   https: {
  //     cert: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './https-cert.pem')),
  //     key: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './https-key.pem')),
  //   },
  //   host: 'tma.internal',
  // },
  publicDir: './public',
  vercel: {
    outDir: '.vercel/output',
  },
});