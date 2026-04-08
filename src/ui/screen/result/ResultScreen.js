import { needlesManager } from "../../../game/needle/NeedlesManager.js";
import { pointZone } from "../../../game/PointZone.js";
import { pointZoneDetector } from "../../../game/scoring/PointZoneDetector.js";
import { gameParams } from "../../../game/states/gameParams.js";
import { halfCircle } from "../../components/HalfCircle.js";
import { questionRenderer } from "../../components/QuestionRenderer/QuestionRenderer.js";
import { resultPointFormatter } from "../../components/ResultPointRenderer/ResultPointFormatter.js";
import { resultPointRenderer } from "../../components/ResultPointRenderer/ResultPointRenderer.js";
import { dispatchPointerToClickTargets } from "../../input/dispatchPointerToHitTargets.js";
import { pointerInput } from "../../input/PointerInput.js";
import { buttonGoBackToTitle } from "./components/buttonGoBackToTitle.js";

class ResultScreen {
    #buttons;
    #formattedJudges;

    constructor() {
        this.#buttons = [
            buttonGoBackToTitle
        ];
    }

    onEnter() {
        const judges = pointZoneDetector.judgeAll();
        this.#formattedJudges = resultPointFormatter.format(judges); // TODO: アウトプットを judges ではなく、scores にしたい。もっというと、renderer がアホになれる設計に組み替えたい。
    }

    draw(context) {
        halfCircle.draw(context);
        pointZone.draw(context);
        needlesManager.drawAll(context);
        questionRenderer.draw(context, gameParams.question);
        resultPointRenderer.draw(context, this.#formattedJudges);

        for (let button of this.#buttons) {
            button.draw(context);
        }
    }

    activate() {
        pointerInput.onPointerDown((pointer) => {
            dispatchPointerToClickTargets({
                pointer: pointer,
                targets: this.#buttons
            });
        });
    }
}

export const resultScreen = new ResultScreen();