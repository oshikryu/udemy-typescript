// type definition files are installed with some npm modules
// if it is not included for us, we have to add it manually definitely-typed
// d.ts is a type definition file
import faker from 'faker';

// class exports are capitalized by convention
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
}
