import { SegmentFileOptionsGenerator } from "../../types/segment.types";
import { generateIndexSegment } from "./segment.index-generator";
import { generateVueSegment } from "./segment.vue-generator";
import { generateTypesSegment } from "./segment.types-generator";
import { generateUseSegment } from "./segment.use-generator";

export const segmentFileGenerators:
  SegmentFileOptionsGenerator[] = [
  generateTypesSegment,
  generateVueSegment,
  generateIndexSegment,
  generateUseSegment
];