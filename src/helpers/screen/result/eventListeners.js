import { title } from "../title/title.js";
import { canvas } from "../../canvas/Canvas.js";

export function enableButtonResult(go_back_to_title_button) {
    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        // 「タイトルに戻る」ボタンがクリックされたらタイトル画面に移行する
        let canvas_rectangle = canvas.getBoundingClientRect();
        if(go_back_to_title_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            title();
        }
    }
}