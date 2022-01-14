import EagleLoggable from "../../EagleLoggable";
import IEagleWindowContext from "./IEagleWindowContext";

export default abstract class EagleWindowImplementation extends EagleLoggable {

    constructor(window: IEagleWindowContext) {
        super("Window");
        this.window = window;
    }

    private window: IEagleWindowContext;

    SetTitle(title: string): void {
        this.window.SetTitle(title);
        this.ChangeLoggingKey(title);
    }

    GetSettings(): any {
        return this.window.GetSettings();
    }

    SaveSettings(settings: any): void {
        this.window.SetSettings(settings);
    }

    GetMount(): HTMLElement {
        return this.window.GetMount();
    }

    GetWidth(): number {
        return this.window.GetWidth();
    }

    GetHeight(): number {
        return this.window.GetHeight();
    }

    abstract OnOpened(): void;
    abstract OnResized(): void;
    abstract OnClosed(): void;

}