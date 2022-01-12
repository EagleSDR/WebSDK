import EagleEventDispatcher from "../EagleEventDispatcher";

export default interface IEagleManagedSocket {

    GetId(): string;

    SendText(data: string): void;
    SendBinary(data: ArrayBuffer): void;

    OnReady: EagleEventDispatcher<void>;
    OnTextMessage: EagleEventDispatcher<string>;
    OnBinaryMessage: EagleEventDispatcher<ArrayBuffer>;

}