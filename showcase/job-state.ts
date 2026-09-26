export type GenerationJob =
  | { status: "queued"; id: string }
  | { status: "running"; id: string; startedAt: string }
  | { status: "completed"; id: string; outputUrl: string }
  | { status: "failed"; id: string; message: string };

export function transition(
  job: GenerationJob,
  event:
    | { type: "start"; at: string }
    | { type: "complete"; outputUrl: string }
    | { type: "fail"; message: string }
): GenerationJob {
  if (event.type === "start" && job.status === "queued") {
    return { status: "running", id: job.id, startedAt: event.at };
  }

  if (event.type === "complete" && job.status === "running") {
    return { status: "completed", id: job.id, outputUrl: event.outputUrl };
  }

  if (event.type === "fail" && job.status === "running") {
    return { status: "failed", id: job.id, message: event.message };
  }

  throw new Error(`Invalid transition from ${job.status}`);
}
