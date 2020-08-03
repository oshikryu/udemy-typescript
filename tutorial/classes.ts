class Vehicle {
  // not needed if defined as a type in the args of constructor
  //color: string;

  constructor(public color: string) {
    this.color = color;
  }

  protected drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }
};

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  // field color belongs to vehicle, so do not re-assign namespace of variable
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, 'blue');
car.drive();
car.honk();

