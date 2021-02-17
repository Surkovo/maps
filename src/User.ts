import faker from 'faker';
import { Mappable } from './CustomMap';

//implements makes sure every User we create satisfies the Mappable interface.
//this helps was point that it was the User that needed to change to satisfy the interface. Helps with errors
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  cat: string = 'meow';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
