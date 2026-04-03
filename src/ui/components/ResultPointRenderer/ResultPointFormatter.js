import { gameSettings } from "../../../game/states/gameSettings.js";

class ResultPointFormatter {
    
    constructor () {

    }

    pruneDisabledPlayerPoints(points) {
        const prunedPoints = Object.fromEntries(
            Object.entries(points).filter(([_key, value]) => value != null)
        );

        return prunedPoints;
    }

    format(points) {
        let areas = [];

        let prunedPoints = this.pruneDisabledPlayerPoints(points);

        let i = 0;
        for(let key of Object.keys(prunedPoints)) {
            let point = prunedPoints[key];

            if (point === gameSettings.points[0]) { areas[i] = 0; }
            else if (point === gameSettings.points[1]) { areas[i] = 1; }
            else if (point === gameSettings.points[2]) { areas[i] = 2; }
            else { areas[i] = 3; }

            i++;
        }

        return areas; // TODO: 返却値のやりとりをもう少し直感的にする。
    }
}

export const resultPointFormatter = new ResultPointFormatter();