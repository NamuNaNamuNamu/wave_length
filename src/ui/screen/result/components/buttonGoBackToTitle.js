import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";

export const buttonGoBackToTitle = new ButtonReplaced({
    posX: 0.5,
    posY: 0.85,
    width: 0.85,
    height: 0.15,
    text: "タイトルに戻る",
    onClick: () => { screenManager.navigateTo(titleScreen); }
});