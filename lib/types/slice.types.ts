export enum SliceType {
  widget = 'widget',
  page = 'page',
  feature = 'feature',
  entity = 'entity',
  module = 'module',
  component = 'component',
  shared = 'shared'
}

export interface SliceOptions {
  sliceName: string
  sliceType: SliceType
}

export type OnSliceGeneration = Partial<Record<
  SliceType,
  (
    sliceName: string,
    sliceType: SliceType
  ) => SliceOptions
>>