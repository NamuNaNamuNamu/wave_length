import { canvas } from "../Canvas.js";

export function wScale(width) {
    return width * canvas.getWidth();
}

export function hScale(height) {
    return height * canvas.getHeight();
}