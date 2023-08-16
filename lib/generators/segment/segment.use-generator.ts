import { paramCase, pascalCase } from "change-case";
import { SegmentFileOptionsGenerator } from "../../types/segment.types";

export const generateUseSegment:
  SegmentFileOptionsGenerator = (
  sliceName: string,
  _sliceType: string
) => {
  const sliceNameInPascalCase = pascalCase(
    sliceName
  );

  const segmentName = `use${sliceNameInPascalCase}`;
  const propsName = `I${sliceNameInPascalCase}Props`;
  const emitsName = `I${sliceNameInPascalCase}Emits`;

  return {
    filename: `${segmentName}.ts`,
    content: `
import { ${propsName}, ${emitsName} } from './${paramCase(sliceName)}.types';

export default function ${segmentName}(
  props: ${propsName},
  emit: ${emitsName}
) {
  return {};
}
    `.trim()
  };
};