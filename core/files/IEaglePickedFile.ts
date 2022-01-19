// Represents a file picked by the file manager.
export default interface IEaglePickedFile {

    GetName(): string;
    GetFullName(): string;
    GetToken(): string;

}