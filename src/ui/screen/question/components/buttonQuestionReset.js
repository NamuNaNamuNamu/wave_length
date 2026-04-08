import { pointZone } from "../../../../game/PointZone.js";
import { questionPicker } from "../../../../game/QuestionPicker/QuestionPicker.js";
import { gameParams } from "../../../../game/states/gameParams.js";
import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";

export const buttonQuestionReset = new ButtonReplaced({
    posX: 0.9,
    posY: 0.08,
    width: 0.1,
    height: 0.08,
    text: "⟲",
    onClick: () => {
        pointZone.setRandom();
        gameParams.question = questionPicker.pickRandom();
        screenManager.reDraw();
    }
});