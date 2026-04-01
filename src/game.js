import { Button } from "./helpers/Button.js";
import { draw_text_of_the_top } from "./function.js";
import { draw_half_circle } from "./function.js";
import { draw_point_zone } from "./function.js";
import { draw_question } from "./function.js";
import { draw_needle } from "./function.js";
import { draw_point } from "./function.js";
import { gameSettings } from "./helpers/gameSettings.js";
import { gameParams } from "./helpers/shared/gameParams.js";
import { answerGameParams } from "./helpers/screen/answer/answerGameParams.js";
import { enableMousedownListener, enableMousemoveListener, enableMouseupListener, enableTouchmoveListener } from "./helpers/screen/answer/eventListeners.js";
import { judge } from "./helpers/screen/result/judge.js";
import { enableButtonResult } from "./helpers/screen/result/eventListeners.js";
import { canvas } from "./helpers/canvas/Canvas.js";

export let x = new Array(1000);    // 指の数だけx座標を格納するための配列 (余裕を持って1000要素用意) 
export let y = new Array(1000);    // 指の数だけy座標を格納するための配列 (余裕を持って1000要素用意)

export let change_player_button;

//// 回答フェーズ ////
export function answer(){
    canvas.reset();

    // 画面上部のテキストを表示
    draw_text_of_the_top("出題者は具体例を出してください");
    // 現在の針の角度
    gameParams.theta = [];
    for(let i = 0; i < gameSettings.num_of_player - 1; i++){
        gameParams.theta[i] = -90;
    }
    // 半円形の用意
    draw_half_circle();
    // 針の描画
    draw_needle(gameParams.theta);
    // お題の描画
    draw_question(gameParams.question[0], gameParams.question[1]);

    answerGameParams.current_player = 1;

    // 操作プレイヤー変更ボタンの描画
    let text_color = "";
    if(answerGameParams.current_player == 1) text_color = "rgb(200, 0, 0)";
    if(answerGameParams.current_player == 2) text_color = "rgb(0, 200, 0)";
    if(answerGameParams.current_player == 3) text_color = "rgb(0, 0, 200)";
    change_player_button = new Button(
        canvas.getWidth() * 0.3,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.5,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "P" + answerGameParams.current_player,   // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
        text_color,             // テキストカラー
    );
    change_player_button.draw();

    // 「答え合わせ (決定)」ボタンの描画
    let determination_button = new Button(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.3,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "決定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    determination_button.draw();

    enableMousedownListener(determination_button);
    enableMousemoveListener(determination_button);
    enableTouchmoveListener(determination_button);
    enableMouseupListener();
}

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