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

    #onDrag(x, y) {
        this.#onClick(x, y);
    }

    #isHit(_x, y) {
        const buffer = 0.1; // NOTE: ギリギリにすると、x軸と並行に針を配置するのが難しいため。
        return y <= hScale(halfCircle.getCenterY() + buffer);
    }

    receiveClick(x, y) {
        if(this.#isHit(x, y)) { this.#onClick(x, y); }
    }

    receiveDrag(x, y) {
        if(this.#isHit(x, y)) { this.#onDrag(x, y); }
    }
}

export const needleInputHandler = new NeedleInputHandler();