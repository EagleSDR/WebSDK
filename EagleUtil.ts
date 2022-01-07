import IEagleDraggable from "./ui/IEagleDraggable";

class EagleDraggableWrapper {

    constructor(element: HTMLElement, callbacks: IEagleDraggable) {
        this.element = element;
        this.callbacks = callbacks;
        element.addEventListener("mousedown", (evt: MouseEvent) => {
            this.down = true;
            this.callbacks.DragBegin(evt);
            evt.preventDefault();
            evt.stopPropagation();
        });
        window.addEventListener("mousemove", (evt: MouseEvent) => {
            if (this.down) {
                this.callbacks.DragMove(evt);
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
        window.addEventListener("mouseup", (evt: MouseEvent) => {
            if (this.down) {
                this.down = false;
                this.callbacks.DragEnd(evt);
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
    }

    private element: HTMLElement;
    private callbacks: IEagleDraggable;
    private down: boolean = false;

}

export default class EagleUtil {

    static HttpGetRequestBinary(url: string): Promise<ArrayBuffer> {
        return new Promise<ArrayBuffer>((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.responseType = "arraybuffer";
            request.addEventListener("load", (evt: Event) => {
                resolve(request.response);
            });
            request.addEventListener("error", (evt: Event) => {
                reject();
            })
            request.open("GET", url);
            request.send(null);
        });
    }

    static HttpGetRequestString(url: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.addEventListener("load", (evt: Event) => {
                resolve(request.responseText);
            });
            request.addEventListener("error", (evt: Event) => {
                reject();
            })
            request.open("GET", url);
            request.send(null);
        });
    }

    static async HttpGetRequestJson(url: string): Promise<any> {
        return JSON.parse(await EagleUtil.HttpGetRequestString(url));
    }

    static HttpPostRequestJson(url: string, data: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.addEventListener("load", (evt: Event) => {
                resolve(JSON.parse(request.responseText));
            });
            request.addEventListener("error", (evt: Event) => {
                reject();
            })
            request.open("POST", url);
            request.send(JSON.stringify(data));
        });
    }

    static CreateElement(type: string, classname: string, parent?: HTMLElement): HTMLElement {
        var e = document.createElement(type);
        if (classname != null)
            e.classList.add(classname);
        if (parent != null)
            parent.appendChild(e);
        return e;
    }

    static RemoveElementChildren(element: HTMLElement): void {
        while (element.firstElementChild != null)
            element.firstElementChild.remove();
    }

    static MakeElementDraggable(element: HTMLElement, actions: IEagleDraggable): void {
        new EagleDraggableWrapper(element, actions);
    }

}