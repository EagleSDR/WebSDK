import { EagleDialogButtonType } from "../ui/dialog/button/EagleDialogButtonType";
import IEagleDialogBuilder from "../ui/dialog/IEagleDialogBuilder";
import IEagleDialogManager from "../ui/dialog/IEagleDialogManager";
import IEagleFileManager from "./files/IEagleFileManager";

export default interface IEagleContext {

    GetFileManager(): IEagleFileManager;
    GetDialogManager(): IEagleDialogManager;

}