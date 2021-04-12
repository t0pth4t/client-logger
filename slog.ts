import * as fetch from "isomorphic-fetch";
enum Type {
  info,
  log,
  debug,
  trace,
  warn,
  error,
}
interface Options {
  disableConsoleLogs: boolean;
}
export class slog {
  private readonly apiKey: string;
  private static origin = "https://scrimple-backend.herokuapp.com/v1/logs";
  private readonly options: Options;
  constructor(apiKey: string, options?: Options) {
    if (!apiKey) {
      throw new Error("API Key must have a value!");
    }
    this.apiKey = apiKey;
    this.options = options ?? { disableConsoleLogs: false };
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
    !this.options.disableConsoleLogs && console.log(message);
    this.send(message, Type.log);
  }
  info(message: string) {
    !this.options.disableConsoleLogs && console.info(message);
    this.send(message, Type.info);
  }
  debug(message: string) {
    console.debug(message);
    this.send(message, Type.debug);
  }
  trace(message: string) {
    !this.options.disableConsoleLogs && console.trace(message);
    this.send(message, Type.trace);
  }
  error(message: string, error?: Error) {
    !this.options.disableConsoleLogs && console.error(message, error);
    this.send(message, Type.error, error);
  }
  warn(message: string) {
    !this.options.disableConsoleLogs && console.warn(message);
    this.send(message, Type.warn);
  }
}
