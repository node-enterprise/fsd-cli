import { pascalCase } from "change-case";
import { SegmentFileOptionsGenerator } from "../../types/segment.types";

export const generateIndexSegment:
  SegmentFileOptionsGenerator = (
  sliceName: string,
  _sliceType: string
) => {
  const sliceNameInPascalCase = pascalCase(
    sliceName
  );

  return {
    filename: 'index.ts',
    content: `
export { default } from './${sliceNameInPascalCase}.vue';
    `.trim()
  };
};