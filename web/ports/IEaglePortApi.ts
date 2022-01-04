import IEaglePort from "../IEaglePort";

export default interface IEaglePortApi extends IEaglePort {

    SendRequest(data: any): Promise<any>;

}