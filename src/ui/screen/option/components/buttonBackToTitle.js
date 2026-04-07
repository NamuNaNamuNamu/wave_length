import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";

export const buttonBackToTitle = new ButtonReplaced({
    posX: 0.5,
    posY: 0.9,
    width: 0.7,
    height: 0.15,
    text: "戻る",
    onClick: () => { screenManager.navigateTo(titleScreen); }
});