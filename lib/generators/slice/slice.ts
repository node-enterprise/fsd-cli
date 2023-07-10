import FileSystemUtils from "../../file-system-utils/file-system-utils";
import fs from 'fs';
import { segmentFileGenerators } from "../segment/segment";
import { paramCase } from "change-case";
import { commandTextWithStatus } from "../../console-formatters/show-text";
import { CommandTextStatus } from "../../types/command.types";
import { SegmentFileOptions } from "../../types/segment.types";

const sourceDirs: string[] = [
  'src',
  'lib'
];

const createSliceFolder = (
  sourcePath: string,
  sliceType: string
): string => {
  const slicePath = `${sourcePath}/${sliceType}`;

  fs.existsSync(slicePath)
    || fs.mkdirSync(slicePath);

  return slicePath;
};

const createSegmentFolder = (
  sourcePath: string,
  sliceType: string,
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
    commandTextWithStatus(
      'EXIST',
      segmentOptions.filename,
      CommandTextStatus.info
    );
  } else {
    fs.writeFile(
      filename,
      segmentOptions.content,
      { encoding: 'utf-8' },
      error => {
        if (error) {
          commandTextWithStatus(
            'FAILED CREATE',
            segmentOptions.filename,
            CommandTextStatus.error
          );
        } else {
          commandTextWithStatus(
            'CREATED',
            segmentOptions.filename,
            CommandTextStatus.success
          );
        }
      }
    );
  }
};

const createSegmentFiles = (
  sliceType: string,
  sliceName: string,
  segmentPath: string
) => {
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
  sliceName: string,
  sliceType: string
) => {
  const sourcePath = new FileSystemUtils(sourceDirs)
    .findSourcePath();

  if (!sourcePath) {
    throw new Error(
      `Source path not found`
    );
  }

  createSliceFolder(
    sourcePath, sliceType
  );

  createSegmentFiles(
    sliceType,
    sliceName,
    createSegmentFolder(
      sourcePath, sliceType, sliceName
    )
  );
};