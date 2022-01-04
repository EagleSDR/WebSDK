import EagleObject from "./EagleObject";
import IEagleObjectContext from "./IEagleObjectContext";

export default interface IEagleObjectConstructor {

    new(context: IEagleObjectContext): EagleObject;

}