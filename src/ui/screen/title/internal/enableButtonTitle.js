import { canvas } from "../../../../core/canvas/Canvas.js";
import { eventListenerManager } from "../../EventListenerManager.js";

export function enableButtonTitle(startButton, optionButton) {
    eventListenerManager.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(startButton.isClicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            eventListenerManager.removeAllEventListener();
            startButton.executeOnClick();
        }
        // 設定ボタンが押されたら設定画面に移動する
        if(optionButton.isClicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            eventListenerManager.removeAllEventListener();
            optionButton.executeOnClick();
        }
    }
}