export default class EagleLoggable {

    constructor(loggingKey: string) {
        this.loggingKey = loggingKey;
    }

    private loggingKey: string;

    private CreateLoggingString(msg: string): string {
        return "[" + this.loggingKey + "] " + msg;
    }

    protected ChangeLoggingKey(name: string): void {
        this.Log("Changing logging key to \"" + name + "\".");
        this.loggingKey = name;
    }

    protected Log(msg: string) {
        console.log(this.CreateLoggingString(msg));
    }

    protected Warn(msg: string) {
        console.warn(this.CreateLoggingString(msg));
    }

    protected Error(msg: string) {
        console.error(this.CreateLoggingString(msg));
    }

}