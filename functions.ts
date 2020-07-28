const add = (a: number, b: number): number => {
  return +a + +b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined;
}

// really truly expect to return nothing
const throwError = (message: string): never => {
  throw new Error(message);
  // never reaches the end
}

const throwErrorString = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  // never reaches the end
  return message;
}

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({date, weather}: { date: Date, weather: string}): string => {
  return weather;
}

const logWeather2 = ({date, weather}: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}
