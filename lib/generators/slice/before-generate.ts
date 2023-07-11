import { pascalCase } from "change-case";
import { OnSliceGeneration, SliceOptions, SliceType } from "../../types/slice.types";

const beforeSliceGeneration: OnSliceGeneration = {
  [SliceType.page]: (
    sliceName: string,
    sliceType: SliceType
  ): SliceOptions => {
    if (pascalCase(sliceName).slice(-4) !== 'Page')
      sliceName += 'Page';

    return { sliceName, sliceType };
  }
};

export const onBeforeSliceGeneration = (
  sliceName: string,
  sliceType: SliceType
): SliceOptions => (beforeSliceGeneration[sliceType]
  && beforeSliceGeneration[sliceType]!(
    sliceName, sliceType
  ))
  || { sliceName, sliceType };