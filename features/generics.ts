class ArrayOfNumbers {
  constructor(public collection: number[]) {

  }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {

  }

  get(index: number): string {
    return this.collection[index];
  }
}

// T is an argument that can be anything
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {

  }

  get(index: number): T {
    return this.collection[index];
  }
}


const genericArray = new ArrayOfAnything<string>(['a', 'b', 'c']);
