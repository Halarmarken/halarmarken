declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    MONGO_URI: string;
  }
}
