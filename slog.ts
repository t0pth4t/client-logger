import * as fetch from "isomorphic-fetch";
enum Type {
  info,
  log,
  debug,
  trace,
  warn,
  error,
}
export class slog {
  private readonly apiKey: string;
  private static origin = "https://scrimple-backend.herokuapp.com/v1/logs";
  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("API Key must have a value!");
    }
    this.apiKey = apiKey;
  }

  private send(message: string, type: Type, error?: any) {
    try {
      fetch(slog.origin, {
        method: "POST",
        headers: {
          "x-scrimple-api-key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, type, error }),
      });
    } catch (err) {}
  }
  log(message: string) {
    console.log(message);
    this.send(message, Type.log);
  }
  info(message: string) {
    console.info(message);
    this.send(message, Type.info);
  }
  debug(message: string) {
    console.debug(message);
    this.send(message, Type.debug);
  }
  trace(message: string) {
    console.trace(message);
    this.send(message, Type.trace);
  }
  error(message: string, error?: Error) {
    console.error(message, error);
    this.send(message, Type.error, error);
  }
  warn(message: string) {
    console.warn(message);
    this.send(message, Type.warn);
  }
}
