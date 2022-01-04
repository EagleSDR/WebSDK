import EagleObject from "./EagleObject";
import IEagleObjectContext from "./IEagleObjectContext";

//Responsible for creating the objects.
export default interface IEagleObjectFactory {

    InflateObject(context: IEagleObjectContext): EagleObject;

}