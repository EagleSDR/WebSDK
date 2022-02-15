import EagleEventDispatcher from "../../EagleEventDispatcher";

export default interface IEagleProperty<T> {

    GetValue(): T;
    SetValue(value: T): Promise<void>;

    CanEdit(): boolean;

    OnUpdated: EagleEventDispatcher<T>;

}