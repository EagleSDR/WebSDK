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

}