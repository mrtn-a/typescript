import faker from 'faker';
import { Mappable } from './CustomMap';

// create the properties
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'red';
  // initialise:
  constructor() {
    this.name = faker.name.firstName();
    // need to initialise te location object and its properties
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
