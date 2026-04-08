import { pointZone } from "../../../game/PointZone.js";
import { questionPicker } from "../../../game/QuestionPicker/QuestionPicker.js";
import { gameParams } from "../../../game/states/gameParams.js";
import { halfCircle } from "../../components/HalfCircle.js";
import { questionRenderer } from "../../components/QuestionRenderer/QuestionRenderer.js";
import { textRenderer } from "../../components/TextRenderer.js";
import { dispatchPointerToButtons } from "../../input/dispatchPointerToButtons.js";
import { pointerInput } from "../../input/PointerInput.js";
import { buttonConfirmation } from "./components/buttonConfirmation.js";
import { buttonQuestionReset } from "./components/buttonQuestionReset.js";


class QuestionScreen {
    #buttons;

    constructor() {
        this.#buttons = [
            buttonConfirmation,
            buttonQuestionReset
        ];
    }

    onEnter() {
        pointZone.setRandom();
        gameParams.question = questionPicker.pickRandom();
    }

    draw(context) {
        textRenderer.draw_on_the_top(context, "正解の得点ゾーンを表示中...");
        halfCircle.draw(context);
        pointZone.draw(context);
        questionRenderer.draw(context, gameParams.question);

        for (let button of this.#buttons) {
            button.draw(context);
        }
    }

    activate() {
        pointerInput.onPointerDown((pointer) => {
            dispatchPointerToButtons({
                pointer: pointer,
                buttons: this.#buttons
            });
        });
    }
}

export const questionScreen = new QuestionScreen();