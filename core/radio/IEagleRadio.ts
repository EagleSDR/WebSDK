import EagleObject from "../../web/EagleObject";
import EagleEventDispatcher from "../../EagleEventDispatcher";
import IEaglePortProperty from "../../web/ports/IEaglePortProperty";
import IEagleRadioSession from "./IEagleRadioSession";
import IEaglePluginContext from "../../plugin/IEaglePluginContext";

export default interface IEagleRadio {

    // An event raised when the active session is switched
    OnActiveSessionChanged: EagleEventDispatcher<IEagleRadioSession>;

    // Gets the enabled port.
    Enabled(): IEaglePortProperty<boolean>;

    // Gets the source port.
    Source(): IEaglePortProperty<EagleObject>;

    // Gets the port of the center frequency of the current source. Changes as the current source is changed.
    CenterFrequency(): IEaglePortProperty<number>;

    // Returns a floating session pointer that will ALWAYS point to the active session, even if it's changed. Recommended.
    GetSession(): IEagleRadioSession;

    // Gets the current active session, if any. This will always point to this item, even if the active session is changed. Not recommended unless you know what you're doing.
    GetCurrentSession(): IEagleRadioSession;

    // Gets a module you registered on the backend using it's plugin-specific ID.
    GetPluginModule(plugin: IEaglePluginContext, id: string): EagleObject;

}