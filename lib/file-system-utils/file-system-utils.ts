import path from "path";
import fs from 'fs';

export default class FileSystemUtils {

  constructor(
    public sourceDirs: string[] = []
  ) {}

  findSourceDir(
    sourcePath: string,
    separator: string
  ): string {
    const dir: string | undefined = this
      .sourceDirs
      .find(
        sourceDir => fs.existsSync(
          path.resolve(
            sourcePath, `./${sourceDir}`
          )
        )
      );

    return dir
      ? `${sourcePath}${separator}${dir}`
      : '';
  }

  findSourcePathInside(
    sourcePath: string,
    separator: string
  ): string {
    return this.findSourceDir(
      sourcePath, separator
    );
  }

  findSourcePathUp(
    sourcePath: string,
    separator: string
  ): string {
    const desiredPath: string = sourcePath
      .split(separator)
      .slice(0, -1)
      .join(separator);

    if (!desiredPath) return '';

    const dir: string = this.findSourceDir(
      desiredPath, separator
    );
  
    return dir
      ? dir
      : this.findSourcePathUp(
        desiredPath, separator
      );
  }

  findSourcePathAnywhere(
    sourcePath: string,
    separator: string
  ): string {
    return this
      .findSourcePathInside(
        sourcePath, separator
      )
      || this.findSourcePathUp(
        sourcePath, separator
      );
  }
  
  findSourcePath(): string {
    const processPath: string = process
      .cwd();
  
    return this.findSourcePathAnywhere(
      processPath, path.sep
    );
  }

}