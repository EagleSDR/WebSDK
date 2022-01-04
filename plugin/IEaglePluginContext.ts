import EagleObject from "../web/EagleObject";
import IEagleObjectConstructor from "../web/IEagleObjectConstructor";
import IEaglePluginDemodulator from "./client/IEaglePluginDemodulator";
import IEaglePluginSource from "./client/IEaglePluginSource";
import IEaglePluginAsset from "./IEaglePluginAsset";
import IEaglePluginBootConfig from "./IEaglePluginBootConfig";
import IEaglePluginObjectConstructor from "./IEaglePluginObjectConstructor";

export default interface IEaglePluginContext {

    //Registers a class for construction.
    RegisterClass(classname: string, constructor: IEaglePluginObjectConstructor): void;

    //Returns a promise you can await that'll be called back when the app is finished loading.
    WaitInit(): Promise<void>;

    //Gets the server-side module with the classname. This will only work for modules declared in the plugin manifest, using the same classname
    GetModule(classname: string): EagleObject;

    //Gets a plugin asset
    GetAsset(name: string): IEaglePluginAsset;

    //Registers a source implemented by the plugin.
    RegisterSource(source: IEaglePluginSource): void;

    //Registers a demodulator implemented by the plugin.
    RegisterDemodulator(demod: IEaglePluginDemodulator): void;

    //Sets up the plugin from the config
    Configure(config: IEaglePluginBootConfig): void;

}