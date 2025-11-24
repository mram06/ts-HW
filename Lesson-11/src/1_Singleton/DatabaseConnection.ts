export default class DatabaseConnection {
  private static _instance: DatabaseConnection | null = null;
  private constructor(
    public url: string,
    public port: string,
    public version: string
  ) {}

  public static getInstance(
    url: string = "",
    port: string = "",
    version: string = ""
  ) {
    if (!DatabaseConnection._instance) {
      DatabaseConnection._instance = new DatabaseConnection(url, port, version);
    }
    return DatabaseConnection._instance;
  }

  public connectDb() {
    return `${this.url}:${this.port}/${this.version}`;
  }
}
