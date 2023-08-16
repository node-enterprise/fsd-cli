import { paramCase, pascalCase } from "change-case";
import { SegmentFileOptionsGenerator } from "../../types/segment.types";

export const generateTypesSegment:
  SegmentFileOptionsGenerator = (
  sliceName: string
) => {
  const pascalCaseSliceName = pascalCase(
    sliceName
  );

  return {
    filename: `${paramCase(sliceName)}.types.ts`,
    content: `
export interface I${pascalCaseSliceName}Props {
  example?: void
}

export interface I${pascalCaseSliceName}Emits {
  (event: 'example'): void
}
    `.trim()
  };
};