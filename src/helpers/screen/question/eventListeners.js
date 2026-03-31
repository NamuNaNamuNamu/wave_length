import { answer } from "../../../game.js";
import { draw_point_zone, draw_question, draw_text_of_the_top } from "../../../function.js";
import { draw_half_circle } from "../../../function.js";
import { gameParams } from "../../shared/gameParams.js";
import { questions } from "../../../main.js";
import { canvasReplaced } from "../../Canvas.js";


export function enableButtonQuestion(canvas, context, confirmation_button, question_reset_button) {
    canvasReplaced.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        // スタートボタンがクリックされたらお題出題フェーズに移行する
        let canvas_rectangle = canvasReplaced.getBoundingClientRect();
        if(confirmation_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvasReplaced.removeEventListener("mousedown", mousedownListener, false);
            answer(canvas, context);
        }
        if(question_reset_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            // canvas のリセット
            canvasReplaced.reset();
            
            // 画面上部のテキストを表示
            draw_text_of_the_top("正解の得点ゾーンを表示中...");
            // 半円形の用意
            draw_half_circle();
            // 得点ゾーンをランダムで設定
            gameParams.answer_degree = -Math.random() * 180;
            // 得点ゾーンの描画
            draw_point_zone(gameParams.answer_degree, canvas, context);
            // お題をランダムで設定
            gameParams.question_number = Math.floor(Math.random() * questions.length);
            if(gameParams.question_number == questions.length) gameParams.question_number -= 1;
            // お題の描画
            draw_question(questions[gameParams.question_number][0], questions[gameParams.question_number][1], canvas, context);

            confirmation_button.draw();
            question_reset_button.draw();
        }
    }
}