import { ButtonReplaced } from "../../../components/ButtonReplaced.js";
import { eventListenerManager } from "../../EventListenerManager.js";
import { ready } from "../../ready/ready.js";

export const startButton = new ButtonReplaced({
    posX: 0.5,
    posY: 0.3,
    width: 0.6,
    height: 0.15,
    text: "スタート",
    onClick: temp
});

// TODO: readyScreen を実装したら、screenManager の navigateTo メソッドに置き換える
function temp() {
    eventListenerManager.removeAllEventListener();
    ready();
}