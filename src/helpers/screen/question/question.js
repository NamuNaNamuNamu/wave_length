import { draw_text_of_the_top } from "../../../function.js";
import { halfCircle } from "../../shared/HalfCircle.js";
import { Button } from "../../Button.js";
import { canvas } from "../../canvas/Canvas.js";
import { questionManager } from "../../question/manager/QuestionManager.js";
import { gameParams } from "../../shared/gameParams.js";
import { pointZone } from "../../shared/PointZone.js";
import { enableButtonQuestion } from "./internal/enableButtonQuestion.js";
import { questionRenderer } from "../../question/renderer/QuestionRenderer.js";

//// お題出題フェーズ ////
export function question(){
    canvas.reset();
    
    // 画面上部のテキストを表示
    draw_text_of_the_top("正解の得点ゾーンを表示中...");
    // 半円形の用意
    halfCircle.draw(canvas.getContext());
    // 得点ゾーンをランダムで設定
    pointZone.setRandom();
    pointZone.draw(canvas.getContext());
    // お題をランダムで設定
    gameParams.question = questionManager.pickRandom();
    // お題の描画
    questionRenderer.draw(canvas.getContext(), gameParams.question);
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