import FileSystemUtils from "../../file-system-utils/file-system-utils";
import fs from 'fs';
import { segmentFileGenerators } from "../segment/segment";
import { paramCase, pascalCase } from "change-case";
import { commandTextWithStatus } from "../../console-formatters/show-text";
import { CommandTextStatus } from "../../types/command.types";
import { SegmentFileOptions } from "../../types/segment.types";
import { SliceType } from "../../types/slice.types";
import { onBeforeSliceGeneration } from "./before-generate";

const sourceDirs: string[] = [
  'src',
  'lib'
];

const createSliceFolder = (
  sourcePath: string,
  sliceType: SliceType
): string => {
  const slicePath = `${sourcePath}/${sliceType}`;

  fs.existsSync(slicePath)
    || fs.mkdirSync(slicePath);

  return slicePath;
};

const createSegmentFolder = (
  sourcePath: string,
  sliceType: SliceType,
  sliceName: string
): string => {
  const segmentPath = `${sourcePath}/` +
    `${sliceType}/${paramCase(sliceName)}`;

  fs.existsSync(segmentPath)
    || fs.mkdirSync(segmentPath);

  return segmentPath;
};

const createSegmentFile = (
  segmentPath: string,
  segmentOptions: SegmentFileOptions
) => {
  const filename = `${segmentPath}/${segmentOptions.filename}`;

  if (fs.existsSync(filename)) {
    commandTextWithStatus({
      title: 'EXIST',
      text: segmentOptions.filename,
      status: CommandTextStatus.info
    }).log();
  } else {
    fs.writeFile(
      filename,
      segmentOptions.content,
      { encoding: 'utf-8' },
      error => {
        if (error) {
          commandTextWithStatus({
            title: 'FAILED CREATE',
            text: segmentOptions.filename,
            status: CommandTextStatus.error
          }).log();
        } else {
          commandTextWithStatus({
            title: 'CREATED',
            text: segmentOptions.filename,
            status: CommandTextStatus.success
          }).log();
        }
      }
    );
  }
};

const createSegmentFiles = (
  sliceType: SliceType,
  sliceName: string,
  segmentPath: string
) => {
  commandTextWithStatus({
    title: `${pascalCase(sliceType)} generation`,
    bold: true
  }).log();

  segmentFileGenerators.forEach(
    segmentOptionsGenerator => createSegmentFile(
      segmentPath,
      segmentOptionsGenerator(
        sliceName, sliceType
      )
    )
  );
};

export const generateSlice = (
  _sliceName: string,
  _sliceType: SliceType
) => {
  const {
    sliceName,
    sliceType
  } = onBeforeSliceGeneration(
    _sliceName, _sliceType
  );

  const sourcePath = new FileSystemUtils(sourceDirs)
    .findSourcePath();

  if (!sourcePath) {
    throw new Error(`Source path not found`);
  }

  createSliceFolder(sourcePath, sliceType);

  createSegmentFiles(
    sliceType,
    sliceName,
    createSegmentFolder(
      sourcePath, sliceType, sliceName
    )
  );
};