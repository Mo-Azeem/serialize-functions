import { expect, test, describe } from "bun:test";
import { toParts, assemble } from "../lib";

test("test start", () => {
  expect(1).toBe(1);
});

describe("Serialize Functions", () => {
  test("No paramters function", () => {
    function getHello() {
      return "hello";
    }

    const parts = toParts(getHello);
    const assembled = assemble(parts);

    expect(assembled()).toBe("hello");
  });

  test("One paramter function", () => {
    function sayHello(name: string) {
      return "Hello " + name;
    }

    const parts = toParts(sayHello);
    const assembled = assemble(parts);

    expect(assembled("Bun")).toBe("Hello Bun");
  });

  test("Two paramters function", () => {
    function add(a: number, b: number) {
      return a + b;
    }

    const parts = toParts(add);
    const assembled = assemble(parts);

    expect(assembled(1, 2)).toBe(3);
    expect(assembled(2, 2)).toBe(4);
    expect(assembled(5, 5)).toBe(10);
  });
});
