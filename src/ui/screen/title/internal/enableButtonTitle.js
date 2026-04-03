import { ready } from "../../ready/ready.js";
import { option } from "../../option/option.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function enableButtonTitle(startButton, optionButton) {
    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(startButton.isClicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            ready();
        }
        // 設定ボタンが押されたら設定画面に移動する
        if(optionButton.isClicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            option();
        }
    }
}