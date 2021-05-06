interface userProps {
  name?: string;
  age?: number;
}

// type allias
type Callback = () => void;

export class User {
  // object event of strings
  events: { [key: string]: Callback[] } = {};

  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: userProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
