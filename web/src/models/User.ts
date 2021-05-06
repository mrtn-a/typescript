import axios, { AxiosResponse } from 'axios';

interface userProps {
  id?: number;
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

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    // if handler is undefined or there's no handlers
    if (!handlers || handlers.length === 0) {
      return;
    }
    // if there are handlers
    handlers.forEach((callback) => {
      callback();
    });
  };

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }
  save(): void {
    // extract id
    const id = this.get('id');
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // no user yet; post
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
