import { toParts, assemble } from "./lib";

function d(a: number, b: number) {
  return a + b;
}

function printMyName(name: string) {
  console.log("Hello ", name, " nice to meet you");
  console.log("i like this code");
}

const parts = toParts(d);

const myFunction = assemble(parts);

const anotherParts = toParts(printMyName);

const anotherFunction = assemble(anotherParts)

console.log(myFunction(1, 3));

anotherFunction('mohammed');
