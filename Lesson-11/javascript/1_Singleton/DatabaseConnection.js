class DatabaseConnection {
    constructor(url, port, version) {
        this.url = url;
        this.port = port;
        this.version = version;
    }
    static getInstance(url = "", port = "", version = "") {
        if (!DatabaseConnection._instance) {
            DatabaseConnection._instance = new DatabaseConnection(url, port, version);
        }
        return DatabaseConnection._instance;
    }
    connectDb() {
        return `${this.url}:${this.port}/${this.version}`;
    }
}
DatabaseConnection._instance = null;
export default DatabaseConnection;
