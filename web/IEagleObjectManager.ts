import IEagleObjectConstructor from "./IEagleObjectConstructor";
import IEagleObjectContext from "./IEagleObjectContext";

export default interface IEagleObjectManager {

    //Registers a class for construction.
    RegisterClass(classname: string, constructor: IEagleObjectConstructor): void;

    //Resolves a GUID to it's associated object.
    ResolveNetObject(guid: string): any;

}