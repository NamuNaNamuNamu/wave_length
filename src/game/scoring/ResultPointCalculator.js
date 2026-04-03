import { gameSettings } from "../states/gameSettings.js";
import { needlesManager } from "../needle/NeedlesManager.js";
import { pointZone } from "../PointZone.js";
import { JUDGES } from "./judges.js";
import { PLAYERS } from "../player/players.js";
import { activePlayerChecker } from "../player/ActivePlayerChecker.js";

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
        let points = {
            [PLAYERS.PLAYER1.number]: null,
            [PLAYERS.PLAYER2.number]: null,
            [PLAYERS.PLAYER3.number]: null,
        };

        for (let player of activePlayerChecker.getActivePlayer()) {
            let judge = this.calculate({
                needleDegree: needlesManager.getDegree(player.number),
                answerDegree: pointZone.getAnswerDegree(),
                pointZoneAreaSize: gameSettings.area_size
            });

            if (judge === JUDGES.PERFECT) { points[player.number] = gameSettings.points[0]; }
            else if (judge === JUDGES.GREAT) { points[player.number] = gameSettings.points[1]; }
            else if (judge === JUDGES.GOOD) { points[player.number] = gameSettings.points[2]; }
            else { points[player.number] = 0; }
        }

        return points;
    }
}

export const resultPointCalculator = new ResultPointCalculator();