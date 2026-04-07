export function dispatchPointerToButtons({pointer, buttons}) {
    for (let button of buttons) {
        button.receiveClick(pointer.getX(), pointer.getY());
    }
}