export class slog {
  private readonly apiKey: string;
  constructor(apiKey:string) {
    this.apiKey = apiKey;
  }
  info(message: string) {
    fetch("https://scrimple-backend.herokuapp.com", {
      headers: { "x-scrimple-api-key": this.apiKey },
      body: JSON.stringify({ message }),
    });
  }
}
