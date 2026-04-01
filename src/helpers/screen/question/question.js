import { draw_question, draw_text_of_the_top } from "../../../function.js";
import { halfCircle } from "../../../main.js";
import { Button } from "../../Button.js";
import { canvas } from "../../canvas/Canvas.js";
import { questionManager } from "../../question/QuestionManager.js";
import { gameParams } from "../../shared/gameParams.js";
import { PointZone } from "../../shared/PointZone.js";
import { enableButtonQuestion } from "./helpers/enableButtonQuestion.js";

//// お題出題フェーズ ////
export function question(){
    canvas.reset();
    
    // 画面上部のテキストを表示
    draw_text_of_the_top("正解の得点ゾーンを表示中...");
    // 半円形の用意
    halfCircle.draw(canvas.getContext());
    // 得点ゾーンをランダムで設定
    gameParams.answer_degree = -Math.random() * 180;
    // 得点ゾーンの描画
    const pointZone = new PointZone({answerDegree: gameParams.answer_degree});
    pointZone.draw(canvas.getContext());
    // お題をランダムで設定
    gameParams.question = questionManager.pickRandom();
    // お題の描画
    draw_question(gameParams.question[0], gameParams.question[1]);
    // 「確認しました」ボタンの描画
    let confirmation_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.8,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "確認しました",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    confirmation_button.draw();

    let question_reset_button = new Button(
        canvas.getWidth() * 0.9,     // x座標
        canvas.getHeight() * 0.08,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.08,   // 縦幅
        "⟲",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    question_reset_button.draw();

    enableButtonQuestion(confirmation_button, question_reset_button);
}