import { hScale, wScale } from "../../../../core/canvas/utils/scale.js";

export function isClicked(button, x, y) {
    const isOverlappingX = x >= button.getPosX() - wScale(button.getWidth() * 0.5) && x <= wScale(button.getPosX() + button.getWidth() * 0.5);
    const isOverlappingY = y >= hScale(button.getPosY() - button.getHeight() * 0.5) && y <= hScale(button.getPosY() + button.getHeight() * 0.5);

    return isOverlappingX && isOverlappingY;
}