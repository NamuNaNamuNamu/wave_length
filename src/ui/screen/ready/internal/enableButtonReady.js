import { question } from "../../question/question.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function enableButtonReady(display_point_zone_button) {
    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // 得点ゾーン表示ボタンがクリックされたらお題出題フェーズに移行する
        if(display_point_zone_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            question();
        }
    }
}