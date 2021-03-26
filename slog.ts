import * as fetch from "isomorphic-fetch";
export class slog {
  private readonly apiKey: string;
  private static origin = "https://scrimple-backend.herokuapp.com/v1/logs";
  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("API Key must have a value!");
    }
    this.apiKey = apiKey;
  }

  log(message: string) {
    console.log(message);
    fetch(slog.origin, {
      method: "POST",
      headers: {
        "x-scrimple-api-key": this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  }

  info(message: string) {
    console.info(message);
    fetch(slog.origin, {
      method: "POST",
      headers: {
        "x-scrimple-api-key": this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  }
  error(message: string, error?: Error) {
    console.error(message, error);
    fetch(slog.origin, {
      method: "POST",
      headers: {
        "x-scrimple-api-key": this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, error }),
    });
  }

  warn(message: string) {
    console.warn(message);
    fetch(slog.origin, {
      method: "POST",
      headers: {
        "x-scrimple-api-key": this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  }
}
