export default interface IEaglePluginAsset {

    GetName(): string;
    GetUrl(): string;
    DownloadAsJson(): Promise<any>;
    DownloadAsString(): Promise<string>;
    DownloadAsBinary(): Promise<ArrayBuffer>;

}