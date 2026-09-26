export type GeneratorKind =
  | "receipt"
  | "flight-ticket"
  | "chat-mockup"
  | "social-post";

export interface GeneratorRequest {
  kind: GeneratorKind;
  data: Record<string, unknown>;
}

export interface GeneratedDocument {
  id: string;
  kind: GeneratorKind;
  status: "draft" | "rendering" | "ready" | "failed";
  fileName?: string;
}
