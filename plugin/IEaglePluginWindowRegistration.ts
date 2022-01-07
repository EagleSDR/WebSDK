import EagleWindowImplementation from "../ui/window/EagleWindowImplementation";
import IEagleWindowContext from "../ui/window/IEagleWindowContext";
import IEaglePluginContext from "./IEaglePluginContext";

export default interface IEaglePluginWindowRegistration {

    //Constructor
    new(window: IEagleWindowContext, plugin: IEaglePluginContext): EagleWindowImplementation;

    //These will be STATIC methods
    EagleGetDisplayName(): string;
    EagleGetGroup(): string;
    EagleGetPreview(): HTMLElement;

}