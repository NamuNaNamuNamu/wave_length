import { draw_needle, draw_point, draw_question } from "../../../function.js";
import { judge } from "./judge.js";
import { Button } from "../../Button.js";
import { canvas } from "../../canvas/Canvas.js";
import { gameParams } from "../../shared/gameParams.js";
import { enableButtonResult } from "./helpers/enableButtonResult.js";
import { halfCircle } from "../../../main.js";
import { PointZone } from "../../shared/PointZone.js";

//// 答え合わせフェーズ ////
export function result(){
    canvas.reset();

    // 半円形の用意
    halfCircle.draw(canvas.getContext());
    // 得点ゾーンの描画
    const pointZone = new PointZone({answerDegree: gameParams.answer_degree});
    pointZone.draw(canvas.getContext());
    // 針の描画
    draw_needle(gameParams.theta);
    // お題の描画
    draw_question(gameParams.question[0], gameParams.question[1]);

    // 点数の判定
    let areas = judge();
    
    // 点数の描画
    draw_point(areas);

    // 「タイトルに戻る」ボタンの描画
    let go_back_to_title_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.85,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "タイトルに戻る",         // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    go_back_to_title_button.draw();

    enableButtonResult(go_back_to_title_button);
}