const esbuild = require("esbuild");
const path = require('path');
const prependFile = require('prepend-file');
const glob = require('tiny-glob');

const paths = {
  inputDir: '../bin/**/*.ts',
  outputDir: '../bin',
  cli: '../bin/fsd.js'
};

for (let key in paths) {
  paths[key] = path.resolve(
    __dirname, paths[key]
  );
}

(async () => {
  const entryPoints = await glob(
    paths.inputDir, { absolute: true }
  );

  try {
    const result = await esbuild
      .build({
        logLevel: "info",
        entryPoints,
        minify: true,
        bundle: true,
        platform: 'node',
        outdir: paths.outputDir
      });

    if (result.errors.length)
      return result.errors.forEach(console.error);

    await prependFile(
      paths.cli, '#!/usr/bin/env node\n'
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();