import type { GeneratedDocument } from "./generator-types";

export function canDownload(document: GeneratedDocument): boolean {
  return document.status === "ready" && Boolean(document.fileName);
}

export function nextStatus(
  status: GeneratedDocument["status"],
  event: "start" | "success" | "failure",
): GeneratedDocument["status"] {
  if (event === "start" && status === "draft") return "rendering";
  if (event === "success" && status === "rendering") return "ready";
  if (event === "failure" && status === "rendering") return "failed";
  return status;
}
