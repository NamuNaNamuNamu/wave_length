export function reset(canvas) {
    canvas.getContext().fillStyle = "rgb(240, 240, 240)";
    canvas.getContext().fillRect(0, 0, canvas.getWidth(), canvas.getHeight());
}