import EagleWindowImplementation from "../ui/window/EagleWindowImplementation";
import IEagleWindowContext from "../ui/window/IEagleWindowContext";
import IEaglePluginContext from "./IEaglePluginContext";

export default interface IEaglePluginWindowRegistration {

    new(window: IEagleWindowContext, plugin: IEaglePluginContext): EagleWindowImplementation;

}