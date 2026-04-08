import { gameSettings } from "../states/gameSettings.js";
import { needlesManager } from "../needle/NeedlesManager.js";
import { pointZone } from "../PointZone.js";
import { JUDGES } from "./judges.js";
import { PLAYERS } from "../player/players.js";
import { activePlayerChecker } from "../player/ActivePlayerChecker.js";

class PointZoneDetector {

    constructor () {

    }

    judge({ needleDegree, answerDegree, pointZoneSize }) {
        if (Math.abs(needleDegree - answerDegree) <= pointZoneSize / 2) { return JUDGES.PERFECT; }
        else if (Math.abs(needleDegree - answerDegree) <= pointZoneSize / 2 * 3) { return JUDGES.GREAT; }
        else if (Math.abs(needleDegree - answerDegree) <= pointZoneSize / 2 * 5) { return JUDGES.GOOD; }
        else { return JUDGES.MISS; }
    }

    judgeAll() { // TODO: 引数は右のようにする。 { needleDegrees, answerDegree, pointZoneSize }
        let judges = {
            [PLAYERS.PLAYER1.number]: null,
            [PLAYERS.PLAYER2.number]: null,
            [PLAYERS.PLAYER3.number]: null,
        };

        for (let player of activePlayerChecker.getActivePlayer()) {
            let judge = this.judge({
                needleDegree: needlesManager.getDegree(player.number),
                answerDegree: pointZone.getAnswerDegree(),
                pointZoneSize: gameSettings.pointZoneSize
            });

            judges[player.number] = judge;
        }

        return judges;
    }
}

export const pointZoneDetector = new PointZoneDetector();