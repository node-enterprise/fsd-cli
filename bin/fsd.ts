import boxen from 'boxen';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import FileSystemUtils from '../lib/file-system-utils/file-system-utils';
import { pascalCase, paramCase } from 'change-case';
import fs from 'fs';

const sourceDirs: string[] = [
  'src',
  'lib'
];

const createCommandText = (
  ...text: string[]
) => boxen(text.join('\n'), {
  title: 'Command example',
  titleAlignment: 'center',
  borderColor: 'blue'
});

interface SegmentFileOptions {
  filename: string
  content: string
}

type SegmentFileOptionsGenerator = (
  sliceName: string,
  sliceType: string
) => SegmentFileOptions

const segmentFiles: SegmentFileOptionsGenerator[] = [
  (sliceName: string) => ({
    filename: `${paramCase(sliceName)}.types.ts`,
    content: `export interface I${pascalCase(sliceName)} {}`
  }),

  (sliceName: string, sliceType: string) => {
    const sliceNameInPascalCase = pascalCase(
      sliceName
    );

    const propsInterface = `I${sliceNameInPascalCase}Props`;
    const emitsInterface = `I${sliceNameInPascalCase}Emit`;

    return {
      filename: `${sliceNameInPascalCase}.vue`,
      content: `
<script lang="ts" setup>

import { ${propsInterface}, ${emitsInterface} } from './';

const props = defineProps<${propsInterface}>();
const emit = defineEmits<${emitsInterface}>();

</script>

<template>
  <div class="${paramCase(sliceName)}--${sliceType}">
    ${sliceNameInPascalCase}.vue
  </div>
</template>

<style scoped lang="scss"></style>
      `.trim()
    };
  },

  (sliceName: string, sliceType: string) => {
    const sliceNameInPascalCase = pascalCase(
      sliceName
    );

    return {
      filename: 'index.ts',
      content: `
export * from './${paramCase(sliceName)}.types';
export { default as ${sliceNameInPascalCase} } from './${sliceNameInPascalCase}.vue';
      `.trim()
    };
  }
];

const generateSlice = (
  sliceName: string,
  sliceType: string
) => {
  const sourcePath = new FileSystemUtils(sourceDirs)
    .findSourcePath();

  if (!sourcePath) {
    throw new Error(
      `Source path not found`
    );
  }

  const slicePath = `${sourcePath}/${sliceType}`;

  fs.existsSync(slicePath)
    || fs.mkdirSync(slicePath);

  const segmentPath = `${sourcePath}/${sliceType}/${paramCase(sliceName)}`;

  fs.existsSync(segmentPath)
    || fs.mkdirSync(segmentPath);

  segmentFiles.forEach(segmentOptionsGenerator => {
    const segmentOptions = segmentOptionsGenerator(
      sliceName, sliceType
    );

    fs.writeFileSync(
      `${segmentPath}/${segmentOptions.filename}`,
      segmentOptions.content,
      'utf-8'
    );
  });
};

// ARGS
yargs(hideBin(process.argv))
  .command(
    'generate',
    'Generate slice',
    {
      widget: {
        alias: 'w',
        description: 'Generate widget'
      }
    },
    args => {
      generateSlice(args.widget as string, 'widget');
    }
  )
  .example('fsd generate widget card', 'Generate "card" widget')
  .demandCommand()
  .parse();

yargs(hideBin(process.argv))
  .command('delete', 'Delete slice', {
    widget: {
      alias: 'w',
      description: 'Delete widget'
    }
  }, args => console.log('Delete slice', args))
  .example('fsd delete widget card', 'Delete "card" widget')
  .demandCommand()
  .parse();

console.log(
  createCommandText(
    'generate'
  ),
  // argv
);