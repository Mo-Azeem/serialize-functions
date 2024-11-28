import { type FunctionParts } from "./types";

export function assemble(parts: FunctionParts) {
  return new Function(...parts.signature.parameters, parts.body);
}
