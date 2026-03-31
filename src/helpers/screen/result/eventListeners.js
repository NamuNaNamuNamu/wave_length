import { title } from "../../../game.js";
import { canvasReplaced } from "../../Canvas.js";

export function enableButtonResult(canvas, context, go_back_to_title_button) {
    canvasReplaced.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        // 「タイトルに戻る」ボタンがクリックされたらタイトル画面に移行する
        let canvas_rectangle = canvas.getBoundingClientRect();
        if(go_back_to_title_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            title(canvas, context);
        }
    }
}