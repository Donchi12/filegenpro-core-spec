export type GeneratorDefinition<TInput, TOutput> = {
  id: string;
  label: string;
  validate(input: unknown): TInput;
  generate(input: TInput): Promise<TOutput>;
};

export class GeneratorRegistry {
  private readonly definitions = new Map<string, GeneratorDefinition<any, any>>();

  register<TInput, TOutput>(definition: GeneratorDefinition<TInput, TOutput>) {
    this.definitions.set(definition.id, definition);
  }

  get(id: string) {
    const definition = this.definitions.get(id);
    if (!definition) throw new Error(`Unknown generator: ${id}`);
    return definition;
  }
}
