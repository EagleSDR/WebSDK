import IEaglePluginContext from "../../plugin/IEaglePluginContext";
import EagleObject from "../../web/EagleObject";
import IEaglePortProperty from "../../web/ports/IEaglePortProperty";
import IEagleProperty from "../port/IEagleProperty";

export default interface IEagleRadioSession {

    GetGuid(): string;
    FrequencyOffset(): IEagleProperty<number>;
    FrequencyAbsolute(): IEagleProperty<number>;
    VfoLocked(): IEagleProperty<boolean>;
    Bandwidth(): IEagleProperty<number>;
    Demodulator(): IEagleProperty<EagleObject>;

    // Gets a module you registered on the backend using it's plugin-specific ID.
    GetPluginModule(plugin: IEaglePluginContext, id: string): EagleObject;

}