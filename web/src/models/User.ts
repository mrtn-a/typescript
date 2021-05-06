import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface userProps {
  id?: number;
  name?: string;
  age?: number;
}

// only accept properties into constructor
// hard code dependencies as class properties
export class User {
  public events: Eventing = new Eventing();

  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: userProps): void {
    Object.assign(this.data, update);
  }

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
