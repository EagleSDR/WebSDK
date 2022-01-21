export default interface IEagleDialogButton {

    SetText(text: string): void;
    Enable(): void;
    Disable(): void;
    SetLoading(loading: boolean): void;

}