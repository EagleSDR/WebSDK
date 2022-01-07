import IEagleEventDispatcherHandler from "../../IEagleEventDispatcherHandler";

export default interface IEagleWindowButton {

    SetClassName(classname: string): void;
    SetVisible(visible: boolean): void;
    Bind(callback: IEagleEventDispatcherHandler<IEagleWindowButton>): void;

}