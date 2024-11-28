import type { FunctionParts } from "./types";

const funcSignExp = /\b[a-zA-Z_]\w*\s*\([^)]*\)/;
const funcBodyExp = /\{([\s\S]*?)\}$/;

export function toParts(func: Function): FunctionParts {
  const functionString = serialize(func);
  const signature = getFunctionSignature(functionString);
  const body = getFunctionBody(functionString);

  return { signature, body };
}

function serialize(func: Function) {
  const functionString = func.toString();
  let splitted = functionString.replaceAll("\n", "");
  return splitted.replace("function", "");
}

function getFunctionSignature(func: string) {
  const test = func.match(funcSignExp)?.[0];

  if (!test) throw new Error("Function is not valid");

  const [functionName, parametersString] = test.split(/\s*\(/);
  const parameters = parametersString.replace(")", "").split(",");

  return { functionName, parameters };
}

function getFunctionBody(func: string) {
  const test = func.match(funcBodyExp)?.[0];

  if (!test) throw new Error("Function body is not valid.");

  return test;
}
