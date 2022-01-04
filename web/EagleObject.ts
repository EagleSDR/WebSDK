import EagleLoggable from "../EagleLoggable";
import IEagleObjectConstructor from "./IEagleObjectConstructor";
import IEagleObjectContext from "./IEagleObjectContext";

export default abstract class EagleObject extends EagleLoggable {

    constructor(name: string, net: IEagleObjectContext) {
        super(name);
        this.net = net;
    }

    protected net: IEagleObjectContext;

    protected RegisterClass(classname: string, constructor: IEagleObjectConstructor) {
        return this.net.GetManager().RegisterClass(classname, constructor);
    }

    protected ResolveNetObject<T>(guid: string): any {
        return this.net.GetManager().ResolveNetObject(guid) as T;
    }

}