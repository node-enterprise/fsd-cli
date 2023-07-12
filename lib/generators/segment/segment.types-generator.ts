import { paramCase } from "change-case";
import { SegmentFileOptionsGenerator } from "../../types/segment.types";

export const generateTypesSegment:
  SegmentFileOptionsGenerator = (
  sliceName: string
) => ({
  filename: `${paramCase(sliceName)}.types.ts`,
  content: `
export interface IProps {}

export interface IEmits {}
  `.trim()
});