import { answer } from "../../answer/answer.js";
import { textRenderer } from "../../../shared/renderer/TextRenderer.js";
import { gameParams } from "../../../../game/states/gameParams.js";
import { canvas } from "../../../../core/canvas/Canvas.js";
import { questionPicker } from "../../../../game/questionPicker/QuestionPicker.js";
import { halfCircle } from "../../../../ui/components/HalfCircle.js";
import { pointZone } from "../../../shared/PointZone.js";
import { questionRenderer } from "../../../../ui/components/questionRenderer/QuestionRenderer.js";

export function enableButtonQuestion(confirmation_button, question_reset_button) {
    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        // スタートボタンがクリックされたらお題出題フェーズに移行するß
        let canvas_rectangle = canvas.getBoundingClientRect();
        if(confirmation_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            answer();
        }
        if(question_reset_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.reset();
            
            // 画面上部のテキストを表示
            textRenderer.draw_on_the_top(canvas.getContext(), "正解の得点ゾーンを表示中...");
            // 半円形の用意
            halfCircle.draw(canvas.getContext());
            // 得点ゾーンをランダムで設定
            pointZone.setRandom();
            pointZone.draw(canvas.getContext());
            // お題をランダムで設定
            gameParams.question = questionPicker.pickRandom();
            // お題の描画
            questionRenderer.draw(canvas.getContext(), gameParams.question);

            confirmation_button.draw();
            question_reset_button.draw();
        }
    }
}