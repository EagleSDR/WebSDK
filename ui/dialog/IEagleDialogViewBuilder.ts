import IEagleDialogTextBox from "./text/IEagleDialogTextBox";

export default interface IEagleDialogViewBuilder {

    AddTitle(text: string): IEagleDialogTextBox;
    AddParagraph(text: string): IEagleDialogTextBox;
    AddCustom(node: HTMLElement): void;

}