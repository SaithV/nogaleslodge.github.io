// Fallback JSX namespace to satisfy certain type packages (e.g., @types/mdx)
// This should be safe as React types will augment this with correct definitions.
declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Element {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
export {}
