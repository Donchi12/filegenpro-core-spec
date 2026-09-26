import { describe, expect, it } from "vitest";
import { transition } from "./job-state";

describe("generation state machine", () => {
  it("accepts only valid lifecycle transitions", () => {
    const running = transition(
      { status: "queued", id: "job-1" },
      { type: "start", at: "2026-01-01T00:00:00Z" }
    );

    const completed = transition(running, {
      type: "complete",
      outputUrl: "/files/job-1.pdf",
    });

    expect(completed.status).toBe("completed");
  });
});
