import IEaglePluginDemodulator from "./client/IEaglePluginDemodulator";
import IEaglePluginSource from "./client/IEaglePluginSource";
import IEaglePluginObjectConstructor from "./IEaglePluginObjectConstructor";

export default interface IEaglePluginBootConfig {

    name: string;
    version: string;
    sdk_version: number;
    web_classes: { [classname: string]: IEaglePluginObjectConstructor }
    demodulators: IEaglePluginDemodulator[];
    sources: IEaglePluginSource[];

}