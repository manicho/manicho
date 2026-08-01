/// <reference types="astro/client" />

declare module '*.css' {
  const content: string;
  export default content;
}

declare global {
  interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, unknown>;
  }
}

export {};
