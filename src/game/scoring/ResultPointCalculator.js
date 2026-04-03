import { gameSettings } from "../states/gameSettings.js";
import { needlesManager } from "../needle/NeedlesManager.js";
import { pointZone } from "../PointZone.js";
import { JUDGES } from "./judges.js";

class ResultPointCalculator {

    constructor () {

    }

    calculate ({ needleDegree, answerDegree, pointZoneAreaSize }) {
        if (Math.abs(needleDegree - answerDegree) <= pointZoneAreaSize / 2) { return JUDGES.PERFECT; }
        else if (Math.abs(needleDegree - answerDegree) <= pointZoneAreaSize / 2 * 3) { return JUDGES.GREAT; }
        else if (Math.abs(needleDegree - answerDegree) <= pointZoneAreaSize / 2 * 5) { return JUDGES.GOOD; }
        else { return JUDGES.MISS; }
    }

    calculateAll () { // TODO: 引数は右のようにする。 { needleDegrees, answerDegree, pointZoneAreaSize }
        // TODO: 返却値のやりとりをもう少し直感的にする。
        let areas = [];
        for(let needleNumber = 1; needleNumber <= needlesManager.getNumEnabledNeedles(); needleNumber++){
            let i = needleNumber - 1;
            let judge = this.calculate({
                needleDegree: needlesManager.getDegree(needleNumber),
                answerDegree: pointZone.getAnswerDegree(),
                pointZoneAreaSize: gameSettings.area_size
            });

            if (judge === JUDGES.PERFECT) { areas[i] = 0; }
            else if (judge === JUDGES.GREAT) { areas[i] = 1; }
            else if (judge === JUDGES.GOOD) { areas[i] = 2; }
            else { areas[i] = 3; }
        }

        return areas;
    }
}

export const resultPointCalculator = new ResultPointCalculator();