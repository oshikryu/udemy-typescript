//interface Car {
  //name: string;
  //year: Date;
  //broken: boolean;
  //summary(): string;
//}
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
}


const drink2 = {
  color: 'brown',
  carbonated: true,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

