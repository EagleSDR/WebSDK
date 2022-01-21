import { EagleDialogButtonType } from "./button/EagleDialogButtonType";
import IEagleDialogBuilder from "./IEagleDialogBuilder";

export default interface IEagleDialogManager {

    CreateDialogBuilder(): IEagleDialogBuilder;

    ShowYesNoDialog(title: string, msg: string, yesText: string, yesType: EagleDialogButtonType, noText: string): Promise<boolean>;
    ShowAlertDialog(title: string, msg: string, btnText: string, btnType: EagleDialogButtonType): Promise<void>;

}