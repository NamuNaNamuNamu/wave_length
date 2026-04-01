import { Button } from "./helpers/Button.js";
import { draw_half_circle } from "./function.js";
import { draw_point_zone } from "./function.js";
import { draw_question } from "./function.js";
import { draw_needle } from "./function.js";
import { draw_point } from "./function.js";
import { gameParams } from "./helpers/shared/gameParams.js";
import { judge } from "./helpers/screen/result/judge.js";
import { enableButtonResult } from "./helpers/screen/result/eventListeners.js";
import { canvas } from "./helpers/canvas/Canvas.js";

export let x = new Array(1000);    // 指の数だけx座標を格納するための配列 (余裕を持って1000要素用意) 
export let y = new Array(1000);    // 指の数だけy座標を格納するための配列 (余裕を持って1000要素用意)

//// 答え合わせフェーズ ////
export function result(){
    canvas.reset();

    // 半円形の用意
    draw_half_circle();
    // 得点ゾーンの描画
    draw_point_zone(gameParams.answer_degree);
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