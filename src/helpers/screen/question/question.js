import { textRenderer } from "../../shared/renderer/TextRenderer.js";
import { halfCircle } from "../../../ui/components/HalfCircle.js";
import { Button } from "../../../ui/components/Button.js";
import { canvas } from "../../../core/canvas/Canvas.js";
import { questionPicker } from "../../../game/questionPicker/QuestionPicker.js";
import { gameParams } from "../../../game/states/gameParams.js";
import { pointZone } from "../../../game/PointZone.js";
import { enableButtonQuestion } from "./internal/enableButtonQuestion.js";
import { questionRenderer } from "../../../ui/components/questionRenderer/QuestionRenderer.js";

//// お題出題フェーズ ////
export function question(){
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