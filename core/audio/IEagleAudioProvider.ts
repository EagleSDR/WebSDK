export default interface IEagleAudioProvider {

    // Gets the unique identifier for this provider.
    GetId(): string;

    // Gets the name displayed to the user.
    GetDisplayName(): string;

    // The priority of this being picked by default. High quality sources should be higher in value. Range is ~0-10.
    GetPriority(): boolean;

    // Checks if this item is likely compatible with this browser.
    GetIsCompatible(): boolean;

    // Starts audio playback. Raise an exception to error.
    StartAudio(volume: number): Promise<void>;

    // Sets the current volume level. Volume is 0-1 and is NOT logarithmic. It is expected that you multiply this by each sample.
    SetVolume(value: number): void;

    // Stops audio playback.
    StopAudio(): Promise<void>;

}