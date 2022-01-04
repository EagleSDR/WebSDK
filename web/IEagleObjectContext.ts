import IEagleObjectManager from "./IEagleObjectManager";
import IEaglePortApi from "./ports/IEaglePortApi";
import IEaglePortEvent from "./ports/IEaglePortEvent";
import IEaglePortProperty from "./ports/IEaglePortProperty";

export default interface IEagleObjectContext {

    GetGuid(): string;
    GetManager(): IEagleObjectManager;

    GetPortApi(name: string): IEaglePortApi;
    GetPortEvent(name: string): IEaglePortEvent;
    GetPortProperty<T>(name: string): IEaglePortProperty<T>;

}