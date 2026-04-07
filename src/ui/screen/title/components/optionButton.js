
import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { optionScreen } from "../../option/OptionScreen.js";
import { screenManager } from "../../ScreenManager.js";

export const optionButton = new ButtonReplaced({
    posX: 0.5,
    posY: 0.7,
    width: 0.6,
    height: 0.15,
    text: "設定",
    onClick: () => { screenManager.navigateTo(optionScreen); }
});