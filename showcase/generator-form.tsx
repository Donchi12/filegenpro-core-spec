import { useState } from "react";
import type { GeneratorKind, GeneratorRequest } from "./generator-types";

interface GeneratorFormProps {
  kind: GeneratorKind;
  onSubmit: (request: GeneratorRequest) => void;
}

export function GeneratorForm({ kind, onSubmit }: GeneratorFormProps) {
  const [value, setValue] = useState("");

  return (
    <form
      className="space-y-4 rounded-xl border p-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ kind, data: { value } });
      }}
    >
      <label className="block space-y-2">
        <span className="text-sm font-medium">Content</span>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="min-h-32 w-full rounded-md border bg-background p-3"
          placeholder="Enter generator data..."
        />
      </label>
      <button className="rounded-md border px-4 py-2 font-medium" type="submit">
        Generate
      </button>
    </form>
  );
}
