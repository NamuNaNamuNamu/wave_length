import { question } from "../../../game.js";
import { canvasReplaced } from "../../Canvas.js";

export function enableButtonReady(canvas, context, display_point_zone_button) {
    canvasReplaced.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvasReplaced.getBoundingClientRect();
        // 得点ゾーン表示ボタンがクリックされたらお題出題フェーズに移行する
        if(display_point_zone_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvasReplaced.removeEventListener("mousedown", mousedownListener, false);
            question(canvas, context);
        }
    }
}