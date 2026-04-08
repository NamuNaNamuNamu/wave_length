import { wScale, hScale } from "../../../../core/canvas/utils/scale.js";
import { get_degree } from "../../../../core/utils/degree.js";
import { needlesManager } from "../../../../game/needle/NeedlesManager.js";
import { answerGameParams } from "../../../../game/states/answerGameParams.js";
import { halfCircle } from "../../../components/HalfCircle.js";
import { screenManager } from "../../ScreenManager.js";

class NeedleInputHandler {
    constructor() {

    }

    #onClick(x, y) {
        needlesManager.setDegree({
            player: answerGameParams.current_player,
            degree: get_degree(wScale(halfCircle.getCenterX()), hScale(halfCircle.getCenterY()), x, y)
        });
        screenManager.reDraw();
    }

    #isClicked(_x, y) {
        return y <= hScale(halfCircle.getCenterY());
    }

    receiveClick(x, y) {
        if(this.#isClicked(x, y)) { this.#onClick(x, y); }
    }
}

export const needleInputHandler = new NeedleInputHandler();