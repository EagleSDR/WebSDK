import IEagleProperty from "../../core/port/IEagleProperty";
import EagleEventDispatcher from "../../EagleEventDispatcher";
import IEaglePort from "../IEaglePort";

export default interface IEaglePortProperty<T> extends IEaglePort, IEagleProperty<T> {

}