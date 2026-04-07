import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { eventListenerManager } from "../../../eventListener/EventListenerManager.js";
import { question } from "../../question/question.js";

export const buttonDisplayPointZone = new ButtonReplaced({
    posX: 0.5,
    posY: 0.7,
    width: 0.85,
    height: 0.15,
    text: "得点ゾーン表示",
    onClick: () => { // TODO: questionScreen を実装したら、screenManager の navigateTo メソッドに置き換える
        eventListenerManager.removeAllEventListener();
        question();
    }
});