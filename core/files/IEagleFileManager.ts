import IEagleFilePickerSettings from "./IEagleFilePickerSettings";
import IEaglePickedFile from "./IEaglePickedFile";

export default interface IEagleFileManager {

    // Prompts the user to save a new file, overwriting the existing one. Returns a promise that resolves to a picked file if one was selected or null if the user cancelled the operation.
    PromptCreateFile(settings: IEagleFilePickerSettings): Promise<IEaglePickedFile>;

    // Prompts the user to open an existing file. Returns a promise that resolves to a picked file if one was selected or null if the user cancelled the operation.
    PromptOpenFile(settings: IEagleFilePickerSettings): Promise<IEaglePickedFile>;

    // Requests access to read/write to a known filename. Throws an error if access was denied.
    RequestAccessFile(pathname: string, writable: boolean): Promise<IEaglePickedFile>;

}