import { paramCase, pascalCase } from "change-case";
import { SegmentFileOptionsGenerator } from "../../types/segment.types";

export const generateVueSegment:
  SegmentFileOptionsGenerator = (
  sliceName: string,
  sliceType: string
) => {
  const sliceNameInPascalCase = pascalCase(
    sliceName
  );

  const useSegmenName = `use${sliceNameInPascalCase}`;
  const propsName = `I${sliceNameInPascalCase}Props`;
  const emitsName = `I${sliceNameInPascalCase}Emits`;

  return {
    filename: `${sliceNameInPascalCase}.vue`,
    content: `
<script lang="ts" setup>

import { ${propsName}, ${emitsName} } from './${paramCase(sliceName)}.types';
import ${useSegmenName} from './${useSegmenName}';

const props = defineProps<${propsName}>();
const emit = defineEmits<${emitsName}>();

const {
} = ${useSegmenName}(props, emit);

</script>

<template>
  <div class="${paramCase(sliceName)}--${sliceType}">
    ${sliceNameInPascalCase}.vue
  </div>
</template>

<style scoped lang="scss"></style>
    `.trim()
  };
};