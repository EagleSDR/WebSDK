// Represents a window that can be dragged in to create.
export default interface IEaglePluginWindowInstance {

    // The name shown in the picker.
    GetDisplayName(): string;

    // Defines the name of the group. Items with the same group name are automatically grouped.
    GetGroupName(): string;

    // Generates a preview element. Should not be large or take a long time to create.
    GetPreview(): HTMLElement;

    // Gets the default settings to create the window with.
    GetSettings(): any;

}