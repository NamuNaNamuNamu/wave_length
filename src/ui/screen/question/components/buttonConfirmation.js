import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { answerScreen } from "../../answer/AnswerScreen.js";
import { screenManager } from "../../ScreenManager.js";

export const buttonConfirmation = new ButtonReplaced({
    posX: 0.5,
    posY: 0.85,
    width: 0.8,
    height: 0.15,
    text: "確認しました",
    onClick: () => { screenManager.navigateTo(answerScreen); }
});