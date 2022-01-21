export default interface IEagleKeyValuePersistentStorage {

    SetValue<T>(key: string, value: T): void;
    GetValue<T>(key: string): T;

}