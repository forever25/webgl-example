import fs from "fs"
import { resolve } from "path"

const input: any = {};

function getFilesAndFoldersInDir(path: string) {
  const items = fs.readdirSync(path);

  items.forEach(item => {
    const itemPath = `${path}/${item}`;
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      input[item] = `./examples/${item}/index.html`
    }
  });
}

getFilesAndFoldersInDir('./examples')

/** @type {import('vite').UserConfig} */
export default {
  // root: "./examples/",
  root: "./examples/",
  base: './',
  build: {
    // outputFormat: 'cjs',
    rollupOptions: {
      input
    },
    outDir: resolve(__dirname, "./dist/"),
    emptyOutDir: true
  }
}