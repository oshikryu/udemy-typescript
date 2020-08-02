// type definition files are installed with some npm modules
// if it is not included for us, we have to add it manually definitely-typed
// d.ts is a type definition file
import * as faker from 'faker';
import { Mappable } from './CustomMap';

// class exports are capitalized by convention
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
