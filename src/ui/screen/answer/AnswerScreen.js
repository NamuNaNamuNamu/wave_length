import { needlesManager } from "../../../game/needle/NeedlesManager.js";
import { PLAYERS } from "../../../game/player/players.js";
import { answerGameParams } from "../../../game/states/answerGameParams.js";
import { gameParams } from "../../../game/states/gameParams.js";
import { halfCircle } from "../../components/HalfCircle.js";
import { questionRenderer } from "../../components/QuestionRenderer/QuestionRenderer.js";
import { textRenderer } from "../../components/TextRenderer.js";
import { dispatchPointerToHitTargets } from "../../input/dispatchPointerToHitTargets.js";
import { pointerInput } from "../../input/PointerInput.js";
import { buttonChangePlayer } from "./components/buttonChangePlayer.js";
import { buttonDetermination } from "./components/buttonDetermination.js";
import { needleInputHandler } from "./internal/NeedleInputHandler.js";

class AnswerScreen {
    #buttons;

    constructor() {
        this.#buttons = [
            buttonChangePlayer,
            buttonDetermination
        ];
    }

    onEnter() {
        needlesManager.initialize();
        answerGameParams.current_player = PLAYERS.PLAYER1.number;
    }

    draw(context) {
        textRenderer.draw_on_the_top(context, "出題者は具体例を出してください");
        halfCircle.draw(context);
        needlesManager.drawAll(context);
        questionRenderer.draw(context, gameParams.question);

        for (let button of this.#buttons) {
            button.draw(context);
        }
    }

    activate() {
        pointerInput.onPointerDown((pointer) => {
            dispatchPointerToHitTargets({
                pointer: pointer,
                targets: [...this.#buttons, needleInputHandler]
            });
        });
    }
}

export const answerScreen = new AnswerScreen();