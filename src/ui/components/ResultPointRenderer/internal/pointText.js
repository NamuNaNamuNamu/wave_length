import { canvas } from "../../../../core/canvas/Canvas.js";
import { JUDGES } from "../../../../game/scoring/judges.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";

export const getResultPointText = (point) => {
    let judge;
    if (point === gameSettings.points[0]) { judge = JUDGES.PERFECT }
    else if (point === gameSettings.points[1]) { judge = JUDGES.GREAT }
    else if (point === gameSettings.points[2]) { judge = JUDGES.GOOD }
    else { judge = JUDGES.MISS }

    let marks;
    if (judge === JUDGES.PERFECT) { marks = "！！！" }
    else if (judge === JUDGES.GREAT) { marks = "！！" }
    else if (judge === JUDGES.GOOD) { marks = "！" }
    else { marks = "..." }

    return point + "点" + marks;
}

export const setStyleForText = (context) => {
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    context.font = canvas.getHeight() * 0.05 + "px serif";
}