export default interface IEagleEventDispatcherHandler<T> {

    HandleEvent(data: T): void;

}