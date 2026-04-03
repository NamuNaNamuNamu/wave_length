import { canvas } from "../../../../core/canvas/Canvas.js";
import { JUDGES } from "../../../../game/scoring/judges.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";

export const drawResultPointText = (context, judge, posX, posY) => {
    setStyleForText(context);
    context.fillText(getResultPointText(judge), posX, posY);
}

const getResultPointText = (judge) => {
    let point;
    let marks;
    
    if (judge === JUDGES.PERFECT) {
        point = gameSettings.points[0];
        marks = "！！！";
    }
    else if (judge === JUDGES.GREAT) {
        point = gameSettings.points[1];
        marks = "！！"
    }
    else if (judge === JUDGES.GOOD) {
        point = gameSettings.points[2];
        marks = "！"
    }
    else {
        point = 0;
        marks = "..."
    }

    return point + "点" + marks;
}

const setStyleForText = (context) => {
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    context.font = canvas.getHeight() * 0.05 + "px serif";
}