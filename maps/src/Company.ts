// to avoid interop flag stuff
// https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file
import * as faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      //lat: faker.address.latitude(),
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>
      Company Name: ${this.companyName}
    </h1>
    <h3>
      Catch phrase: ${this.catchPhrase}
    </h3>
    </div>
    `;
  }
}
