interface userProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: userProps): void {
    Object.assign(this.data, update);
  }
}
