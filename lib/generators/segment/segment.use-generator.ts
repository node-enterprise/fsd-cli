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

  return {
    filename: `${segmentName}.ts`,
    content: `
import { IProps, IEmits } from './${paramCase(sliceName)}.types';

export default function ${segmentName}(
  props: IProps,
  emit: IEmits
) {
  return {};
}
    `.trim()
  };
};