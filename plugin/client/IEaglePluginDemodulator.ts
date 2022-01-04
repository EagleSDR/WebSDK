import EagleObject from "../../web/EagleObject";
import IEaglePluginAsset from "../IEaglePluginAsset";

export default interface IEaglePluginDemodulator {

    GetDisplayName(): string;
    GetDisplayNameShort(): string;
    GetDisplayIcon(): IEaglePluginAsset;

    // Called when this option is clicked. Must return an eagle demodulator object that'll be set as the demodulator.
    Choose(): Promise<EagleObject>;

}