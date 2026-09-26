import type { GeneratedDocument } from "./generator-types";
import { nextStatus } from "./generator-state";

export function startGeneration(document: GeneratedDocument): GeneratedDocument {
  return { ...document, status: nextStatus(document.status, "start") };
}

export function completeGeneration(
  document: GeneratedDocument,
  fileName: string,
): GeneratedDocument {
  return {
    ...document,
    fileName,
    status: nextStatus(document.status, "success"),
  };
}
