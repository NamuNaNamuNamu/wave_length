import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { readyScreen } from "../../ready/ReadyScreen.js";
import { screenManager } from "../../ScreenManager.js";

export const startButton = new ButtonReplaced({
    posX: 0.5,
    posY: 0.3,
    width: 0.6,
    height: 0.15,
    text: "スタート",
    onClick: () => { screenManager.navigateTo(readyScreen); }
});