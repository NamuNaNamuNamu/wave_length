import { ButtonReplaced } from "../../../components/ButtonReplaced.js";
import { eventListenerManager } from "../../EventListenerManager.js";
import { option } from "../../option/option.js";

export const optionButton = new ButtonReplaced({
    posX: 0.5,
    posY: 0.7,
    width: 0.6,
    height: 0.15,
    text: "設定",
    onClick: temp
});

// TODO: optionScreen を実装したら、screenManager の navigateTo メソッドに置き換える
function temp() {
    eventListenerManager.removeAllEventListener();
    option();
}