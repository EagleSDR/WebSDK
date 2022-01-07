import EagleObject from "../web/EagleObject";
import IEagleObjectConstructor from "../web/IEagleObjectConstructor";
import IEaglePluginDemodulator from "./client/IEaglePluginDemodulator";
import IEaglePluginSource from "./client/IEaglePluginSource";
import IEaglePluginAsset from "./IEaglePluginAsset";
import IEaglePluginBootConfig from "./IEaglePluginBootConfig";
import IEaglePluginObjectConstructor from "./IEaglePluginObjectConstructor";

export default interface IEaglePluginContext {

    //Gets the server-side module with the classname. This will only work for modules declared in the plugin manifest, using the same classname
    GetModule(classname: string): EagleObject;

    //Gets a plugin asset
    GetAsset(name: string): IEaglePluginAsset;

    //Sets up the plugin from the config
    Configure(config: IEaglePluginBootConfig): void;

}