import { wScale, hScale } from "../../../../core/canvas/utils/scale.js";

export function drawValue({ context, value, posX, posY }) {
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    context.font = hScale(0.05) + "px serif";
    context.fillText(value, wScale(posX), hScale(posY));
}