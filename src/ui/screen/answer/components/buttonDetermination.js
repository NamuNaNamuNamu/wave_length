import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { resultScreen } from "../../result/ResultScreen.js";
import { screenManager } from "../../ScreenManager.js";

export const buttonDetermination = new ButtonReplaced({
    posX: 0.8,
    posY: 0.85,
    width: 0.3,
    height: 0.15,
    text: "決定",
    onClick: () => { screenManager.navigateTo(resultScreen); }
});