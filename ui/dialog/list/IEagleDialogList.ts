import EagleEventDispatcher from "../../../EagleEventDispatcher";
import IEaglePluginAsset from "../../../plugin/IEaglePluginAsset";

export default interface IEagleDialogList {

    OnSelectionChanged: EagleEventDispatcher<any>;

    // Gets the value of the currently selected item
    GetSelectedValue(): any;

    // Makes the list show a loading symbol
    StartLoading(): void;

    // Makes the list show a loading symbol. If StopLoading is not called within timeout, it'll automatically be called
    StartLoadingTimeout(timeoutMs: number): void;

    // Hides the loading symbol
    StopLoading(): void;

    AddItemAsset(priority: number, text: string, subtext: string, icon: IEaglePluginAsset, value: any): void;

    AddItemClass(priority: number, text: string, subtext: string, iconClass: string, value: any): void;

}