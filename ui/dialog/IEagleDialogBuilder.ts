import { EagleDialogButtonType } from "./button/EagleDialogButtonType";
import IEagleDialogButton from "./button/IEagleDialogButton";
import IEagleDialog from "./IEagleDialog";
import IEagleDialogViewBuilder from "./IEagleDialogViewBuilder";

export default interface IEagleDialogBuilder extends IEagleDialogViewBuilder {

    AddButton(text: string, type: EagleDialogButtonType, callback: () => void): IEagleDialogButton;

    Show(): IEagleDialog;

}