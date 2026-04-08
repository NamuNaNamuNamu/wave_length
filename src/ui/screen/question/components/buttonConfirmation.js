import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { eventListenerManager } from "../../../eventListener/EventListenerManager.js";
import { answer } from "../../answer/answer.js";

export const buttonConfirmation = new ButtonReplaced({
    posX: 0.5,
    posY: 0.85,
    width: 0.8,
    height: 0.15,
    text: "確認しました",
    onClick: () => { // TODO: answerScreen を実装したら、screenManager の navigateTo メソッドに置き換える
        eventListenerManager.removeAllEventListener();
        answer();
    }
});