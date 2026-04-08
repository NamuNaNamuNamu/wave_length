import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { questionScreen } from "../../question/questionScreen.js";
import { screenManager } from "../../ScreenManager.js";

export const buttonDisplayPointZone = new ButtonReplaced({
    posX: 0.5,
    posY: 0.7,
    width: 0.85,
    height: 0.15,
    text: "得点ゾーン表示",
    onClick: () => { screenManager.navigateTo(questionScreen); }
});