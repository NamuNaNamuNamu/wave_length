import { gameSettings } from "../../../game/states/gameSettings.js";

class ResultPointFormatter {
    
    constructor () {

    }

    pruneDisabledPlayerJudges(judges) {
        const prunedJudges = Object.fromEntries(
            Object.entries(judges).filter(([_key, value]) => value != null)
        );

        return prunedJudges;
    }

    format(judges) {
        return this.pruneDisabledPlayerJudges(judges);
    }
}

export const resultPointFormatter = new ResultPointFormatter();