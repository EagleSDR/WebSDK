import EagleObject from "../web/EagleObject";
import IEagleObjectContext from "../web/IEagleObjectContext";
import IEaglePluginContext from "./IEaglePluginContext";

export default interface IEaglePluginObjectConstructor {

    new(plugin: IEaglePluginContext, obj: IEagleObjectContext): EagleObject;

}