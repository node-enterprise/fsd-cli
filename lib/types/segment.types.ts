export interface SegmentFileOptions {
  filename: string
  content: string
}

export type SegmentFileOptionsGenerator = (
  sliceName: string,
  sliceType: string
) => SegmentFileOptions