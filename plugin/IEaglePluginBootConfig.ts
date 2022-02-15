import IEagleAudioProvider from "../core/audio/IEagleAudioProvider";
import IEaglePluginDemodulator from "./client/IEaglePluginDemodulator";
import IEaglePluginSource from "./client/IEaglePluginSource";
import IEaglePluginObjectConstructor from "./IEaglePluginObjectConstructor";
import IEaglePluginWindowRegistration from "./IEaglePluginWindowRegistration";

export default interface IEaglePluginBootConfig {

    name: string;
    version: string;
    sdk_version: number;

    web_classes: { [classname: string]: IEaglePluginObjectConstructor }
    windows: { [classname: string]: IEaglePluginWindowRegistration };

    demodulators: IEaglePluginDemodulator[];
    sources: IEaglePluginSource[];
    audio_providers?: IEagleAudioProvider[];

}