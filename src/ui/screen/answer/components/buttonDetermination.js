import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { eventListenerManager } from "../../../eventListener/EventListenerManager.js";
import { result } from "../../result/result.js";

export const buttonDetermination = new ButtonReplaced({
    posX: 0.8,
    posY: 0.85,
    width: 0.3,
    height: 0.15,
    text: "決定",
    onClick: () => { // TODO: resultScreen を実装したら、screenManager の navigateTo メソッドに置き換える
        eventListenerManager.removeAllEventListener();
        result();
    }
});