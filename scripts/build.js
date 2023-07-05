const esbuild = require("esbuild");
const path = require('path');
const prependFile = require('prepend-file');

const paths = {
  entry: path.resolve(
    __dirname, '../bin/fsd.ts'
  ),
  output: path.resolve(
    __dirname, '../bin/fsd.js'
  )
};

esbuild
  .build({
    logLevel: "info",
    entryPoints: [ paths.entry ],
    minify: true,
    bundle: true,
    platform: 'node',
    outfile: paths.output
  })
  .then(result => {
    if (result.errors.length)
      return result.errors.forEach(console.error);

    return prependFile(
      paths.output, '#!/usr/bin/env node\n'
    );
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });