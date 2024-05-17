import * as esbuild from 'esbuild';

let result = await esbuild.build({
  entryPoints: ['src/thisFailsWithTsx.ts', 'src/thisWorksWithTsx.ts'],
  bundle: true,
  target: 'esnext',
  format: 'esm',
  platform: 'node',
  banner: {
    js: [
      'import { createRequire as topLevelCreateRequire } from "module";',
      'const require = topLevelCreateRequire(import.meta.url);',
    ].join(''),
  },
  outdir: 'dist',
});
