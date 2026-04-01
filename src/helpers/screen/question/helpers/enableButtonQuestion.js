import { answer } from "../../../../game.js";
import { draw_point_zone, draw_question, draw_text_of_the_top } from "../../../../function.js";
import { draw_half_circle } from "../../../../function.js";
import { gameParams } from "../../../shared/gameParams.js";
import { canvas } from "../../../canvas/Canvas.js";
import { questionManager } from "../../../question/QuestionManager.js";

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
            draw_text_of_the_top("正解の得点ゾーンを表示中...");
            // 半円形の用意
            draw_half_circle();
            // 得点ゾーンをランダムで設定
            gameParams.answer_degree = -Math.random() * 180;
            // 得点ゾーンの描画
            draw_point_zone(gameParams.answer_degree);
            // お題をランダムで設定
            gameParams.question = questionManager.pickRandom();
            // お題の描画
            draw_question(gameParams.question[0], gameParams.question[1]);

            confirmation_button.draw();
            question_reset_button.draw();
        }
    }
}