import IEagleEventDispatcherHandler from "./IEagleEventDispatcherHandler";

export default class EagleEventDispatcher<T> {

    constructor() {

    }

    private bindings: IEagleEventDispatcherHandler<T>[] = [];

    Bind(handler: IEagleEventDispatcherHandler<T>): void {
        //Make sure we don't already have this
        for (var i = 0; i < this.bindings.length; i++) {
            if (this.bindings[i] == handler)
                return;
        }

        //Add
        this.bindings.push(handler);
    }

    Unbind(handler: IEagleEventDispatcherHandler<T>): IEagleEventDispatcherHandler<T> {
        for (var i = 0; i < this.bindings.length; i++) {
            if (this.bindings[i] == handler) {
                return this.bindings.splice(i, 1)[0];
            }
        }

        return null;
    }

    Send(data: T): void {
        for (var i = 0; i < this.bindings.length; i++) {
            this.bindings[i].HandleEvent(data);
        }
    }

}