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
import ${sliceNameInPascalCase} from './${sliceNameInPascalCase}.vue';

export default ${sliceNameInPascalCase};
    `.trim()
  };
};