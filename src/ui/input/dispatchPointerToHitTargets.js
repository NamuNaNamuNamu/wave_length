export function dispatchPointerToHitTargets({pointer, targets}) {
    for (let target of targets) {
        target.receiveClick(pointer.getX(), pointer.getY());
    }
}