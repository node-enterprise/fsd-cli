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

const ignoreDirCases: string[] = [
  'ui'
];

const slicesFolderNames:
  Partial<Record<SliceType, string>> = {
  [SliceType.widget]: 'widgets',
  [SliceType.page]: 'pages',
  [SliceType.feature]: 'features',
  [SliceType.entity]: 'entities',
  [SliceType.module]: 'modules',
  [SliceType.component]: 'components'
};

const getFolderNameBySliceType = (
  sliceType: string
): string => slicesFolderNames[sliceType]
  || sliceType;

const createSliceFolder = (
  sourcePath: string,
  sliceType: SliceType
): string => {
  const folderName = getFolderNameBySliceType(
    sliceType
  );

  const slicePath = `${sourcePath}/${folderName}`;

  fs.existsSync(slicePath)
    || fs.mkdirSync(slicePath);

  return slicePath;
};

const createSegmentFolder = (
  sourcePath: string,
  fullSliceName: string
): string => {
  const sliceFolders = fullSliceName
    .split('/')
    .map(folder => ignoreDirCases
      .includes(folder.toLowerCase())
      ? folder
      : paramCase(folder));

  sliceFolders.forEach(
    (sliceFolder, index) => {
      const folderPath = `${sourcePath}/` +
        `${sliceFolders.slice(0, index).join('/')}/` +
        sliceFolder;

      fs.existsSync(folderPath)
        || fs.mkdirSync(folderPath);
    }
  );

  const segmentPath = `${sourcePath}/` +
    sliceFolders.join('/');

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

const getOnlySliceName = (
  fullSliceName: string
): string => fullSliceName
  .split('/')
  .pop() || '';

export const generateSlice = (
  fullSliceName: string,
  sliceType: SliceType
) => {
  const sourcePath = new FileSystemUtils(sourceDirs)
    .findSourcePath();

  if (!sourcePath) {
    throw new Error(`Source path not found`);
  }

  const slicePath = createSliceFolder(
    sourcePath, sliceType
  );

  const segmentPath = createSegmentFolder(
    slicePath, fullSliceName
  );

  const {
    sliceName,
    sliceType: _sliceType
  } = onBeforeSliceGeneration(
    getOnlySliceName(fullSliceName), sliceType
  );

  createSegmentFiles(
    _sliceType, sliceName, segmentPath
  );
};