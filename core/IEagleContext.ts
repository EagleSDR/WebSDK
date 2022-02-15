import { EagleDialogButtonType } from "../ui/dialog/button/EagleDialogButtonType";
import IEagleDialogBuilder from "../ui/dialog/IEagleDialogBuilder";
import IEagleDialogManager from "../ui/dialog/IEagleDialogManager";
import IEagleFileManager from "./files/IEagleFileManager";
import IEagleRadio from "./radio/IEagleRadio";

export default interface IEagleContext {

    GetFileManager(): IEagleFileManager;
    GetDialogManager(): IEagleDialogManager;
    GetRadio(): IEagleRadio;

}