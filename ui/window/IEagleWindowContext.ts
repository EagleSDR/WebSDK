import IEagleWindowButton from "./IEagleWindowButton";

export default interface IEagleWindowContext {

    //Sets the current window title.
    SetTitle(title: string): void;

    //Sets new setting data that'll be recalled next time the window is created.
    SetSettings(data: any): void;

    //Get the instance-specific settings.
    GetSettings(): any;

    //Gets the window content. You should place your content in this.
    GetMount(): HTMLElement;

    //Gets the width of the window content.
    GetWidth(): number;

    //Gets the height of the window content.
    GetHeight(): number;

    //Requests that this window be closed.
    CloseWindow(): void;

    //Creates a button in the window header.
    CreateButton(classname: string): IEagleWindowButton;

}