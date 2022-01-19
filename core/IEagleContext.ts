import IEagleDialogBuilder from "../ui/dialog/IEagleDialogBuilder";
import IEagleFileManager from "./files/IEagleFileManager";

export default interface IEagleContext {

    GetFileManager(): IEagleFileManager;

    CreateDialogBuilder(): IEagleDialogBuilder;

}