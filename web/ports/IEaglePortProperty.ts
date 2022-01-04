import EagleEventDispatcher from "../../EagleEventDispatcher";
import IEaglePort from "../IEaglePort";

export default interface IEaglePortProperty<T> extends IEaglePort {

    GetValue(): T;
    SetValue(value: T): Promise<void>;

    CanEdit(): boolean;

    OnUpdated: EagleEventDispatcher<T>;

}