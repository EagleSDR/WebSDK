import EagleObject from "../../web/EagleObject";
import IEaglePluginAsset from "../IEaglePluginAsset";

// An option defined in the source menu.
export default interface IEaglePluginSourceOption {

    GetDisplayName(): string;
    GetDisplaySubtext(): string;
    GetDisplayIcon(): IEaglePluginAsset;

    // Called when this option is clicked. Must return an eagle source object that'll be set as the source.
    Choose(): Promise<EagleObject>;

}