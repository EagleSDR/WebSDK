import IEaglePluginSourceOption from "./IEaglePluginSourceOption";

export default interface IEaglePluginSource {

    GetDisplayName(): string;
    QueryOptions(): Promise<IEaglePluginSourceOption[]>;

}