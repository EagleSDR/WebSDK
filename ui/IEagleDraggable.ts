export default interface IEagleDraggable {

    DragBegin(evt: MouseEvent): void;
    DragMove(evt: MouseEvent): void;
    DragEnd(evt: MouseEvent): void;

}