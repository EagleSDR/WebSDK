import EagleEventDispatcher from "../../EagleEventDispatcher";
import IEaglePort from "../IEaglePort";

export default interface IEaglePortEvent extends IEaglePort {

    OnEvent: EagleEventDispatcher<any>;
    SendEvent(data: any): void;

}