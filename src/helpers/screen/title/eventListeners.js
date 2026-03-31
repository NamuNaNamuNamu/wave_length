import { ready } from "../../../game.js";
import { option } from "../../../game.js";
import { canvas } from "../../Canvas.js";

export function enableButtonTitle(start_button, option_button) {
    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(start_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            ready();
        }
        // 設定ボタンが押されたら設定画面に移動する
        if(option_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            option();
        }
    }
}