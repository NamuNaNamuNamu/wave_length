import { wScale, hScale } from "../../core/canvas/utils/scale.js";

export function drawSubLabel({ context, label, posX, posY }) {
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "left";
    context.font = hScale(0.03) + "px serif";
    context.fillText(label, wScale(posX), hScale(posY));
}