// global.d.ts
declare global {
  interface Instgrm {
    Embeds: {
      process: () => void;
    };
  }

  interface Window {
    instgrm: Instgrm;
  }
}

export {};
