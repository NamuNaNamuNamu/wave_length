export function dispatchPointerToClickTargets({pointer, targets}) {
    for (let target of targets) {
        target.receiveClick?.(pointer.getX(), pointer.getY());
    }
}

export function dispatchPointerToDragTargets({pointer, targets}) {
    for (let target of targets) {
        target.receiveDrag?.(pointer.getX(), pointer.getY());
    }
}