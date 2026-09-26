export function buildOutputName(
  title: string,
  extension: "pdf" | "png" | "json"
) {
  const safeTitle = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

  return `${safeTitle || "document"}.${extension}`;
}
