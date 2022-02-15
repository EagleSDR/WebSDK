import EagleObject from "../../web/EagleObject";
import IEaglePortProperty from "../../web/ports/IEaglePortProperty";
import IEagleProperty from "../port/IEagleProperty";

export default interface IEagleRadioSession {

    FrequencyOffset(): IEagleProperty<number>;
    FrequencyAbsolute(): IEagleProperty<number>;
    VfoLocked(): IEagleProperty<boolean>;
    Bandwidth(): IEagleProperty<number>;
    Demodulator(): IEagleProperty<EagleObject>;

}