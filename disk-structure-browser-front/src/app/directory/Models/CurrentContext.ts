export class CurrentContext {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  getPath(): string {
    return this.path;
  }
}
