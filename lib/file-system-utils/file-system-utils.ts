import path from "path";
import fs from 'fs';

export default class FileSystemUtils {

  constructor(
    public sourceDirs: string[] = []
  ) {}

  findSourceDir(
    sourcePath: string
  ): string {
    return this.sourceDirs.find(
      sourceDir => fs.existsSync(
        path.resolve(
          sourcePath, `./${sourceDir}`
        )
      )
    ) || '';
  }

  findSourceDirInPathInside(
    sourcePath: string
  ): string {
    return this.findSourceDir(
      sourcePath
    );
  }
  
  findSourceDirInPathUp(
    sourcePath: string,
    separator: string
  ): string {
    const desiredPath = sourcePath
      .split(separator)
      .slice(0, -1)
      .join(separator);

    if (!desiredPath) return '';

    const dir = this.findSourceDir(
      desiredPath
    );
  
    return dir
      ? dir
      : this.findSourceDirInPathUp(
        sourcePath, separator
      );
  }
  
  findSourceDirInPath(
    sourcePath: string,
    separator: string
  ): string {
    return this
      .findSourceDirInPathInside(
        sourcePath
      )
      || this.findSourceDirInPathUp(
        sourcePath, separator
      );
  }
  
  findSourcePath(): string {
    const processPath: string = process.cwd();
  
    return this.findSourceDirInPath(
      processPath, path.sep
    );
  }

}