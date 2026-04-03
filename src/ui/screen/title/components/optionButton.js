import { ButtonReplaced } from "../../../components/ButtonReplaced.js";
import { option } from "../../option/option.js";

export const optionButton = new ButtonReplaced({
    posX: 0.5,
    posY: 0.7,
    width: 0.6,
    height: 0.15,
    text: "設定",
    onClick: option
});