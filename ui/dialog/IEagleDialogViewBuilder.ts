import IEagleDialogList from "./list/IEagleDialogList";
import IEagleDialogTextBox from "./text/IEagleDialogTextBox";

export default interface IEagleDialogViewBuilder {

    AddTitle(text: string): IEagleDialogTextBox;
    AddParagraph(text: string): IEagleDialogTextBox;
    AddCustom(node: HTMLElement): void;
    AddList(): IEagleDialogList;

}