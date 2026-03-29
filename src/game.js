import { canvas_reset } from "./function.js";
import { Button } from "./helpers/Button.js";
import { draw_caution } from "./function.js";
import { draw_text_of_the_top } from "./function.js";
import { draw_half_circle } from "./function.js";
import { center_of_arc_x, center_of_arc_y } from "./main.js";
import { draw_point_zone } from "./function.js";
import { questions } from "./main.js";
import { draw_question } from "./function.js";
import { draw_needle } from "./function.js";
import { get_degree } from "./function.js";
import { draw_point } from "./function.js";
import { draw_text_on_option } from "./function.js";
import { draw_number_on_option } from "./function.js";
import { enableButtonTitle } from "./helpers/screen/title/eventListeners.js";
import { numPlayers } from "./helpers/screen/option/numPlayers.js";
import { pointZoneWidth } from "./helpers/screen/option/pointZoneWidth.js";
import { pointZone1 } from "./helpers/screen/option/pointZone1.js";
import { pointZone2 } from "./helpers/screen/option/pointZone2.js";
import { pointZone3 } from "./helpers/screen/option/pointZone3.js";
import { enableButtonOption } from "./helpers/screen/option/eventListeners.js";
import { gameSettings } from "./helpers/gameSettings.js";
import { enableButtonReady } from "./helpers/screen/ready/eventListeners.js";
import { gameParams } from "./helpers/shared/gameParams.js";
import { enableButtonQuestion } from "./helpers/screen/question/eventListeners.js";
import { answerGameParams } from "./helpers/screen/answer/answerGameParams.js";
import { enableMousedownListener, enableMousemoveListener, enableMouseupListener, enableTouchmoveListener } from "./helpers/screen/answer/eventListeners.js";
import { judge } from "./helpers/screen/result/judge.js";
import { enableButtonResult } from "./helpers/screen/result/eventListeners.js";

export let x = new Array(1000);    // 指の数だけx座標を格納するための配列 (余裕を持って1000要素用意) 
export let y = new Array(1000);    // 指の数だけy座標を格納するための配列 (余裕を持って1000要素用意)

export let change_player_button;

//// タイトル画面 ////
export function title(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // スタートボタンの描画
    let start_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.3,    // y座標
        canvas.width * 0.6,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "スタート",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    start_button.draw(canvas, context);

    // オプションボタンの描画
    let option_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.7,    // y座標
        canvas.width * 0.6,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "設定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    option_button.draw(canvas, context);

    enableButtonTitle(canvas, context, start_button, option_button);
}

//// 設定画面 ////
export function option(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);    
    let [left_button1, right_button1] = numPlayers(canvas, context);
    let [left_button2, right_button2] = pointZoneWidth(canvas, context);
    let [left_button3, right_button3] = pointZone1(canvas, context);
    let [left_button4, right_button4] = pointZone2(canvas, context);
    let [left_button5, right_button5] = pointZone3(canvas, context);

    // タイトルに戻るボタンの描画
    let back_to_title_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.9,    // y座標
        canvas.width * 0.7,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "戻る",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    back_to_title_button.draw(canvas, context);

    let buttons = {
        left: {},
        right: {}
    };
    buttons.left.numPlayers = left_button1;
    buttons.right.numPlayers = right_button1;
    buttons.left.pointZoneWidth = left_button2;
    buttons.right.pointZoneWidth = right_button2;
    buttons.left.pointZone1 = left_button3;
    buttons.right.pointZone1 = right_button3;
    buttons.left.pointZone2 = left_button4;
    buttons.right.pointZone2 = right_button4;
    buttons.left.pointZone3 = left_button5;
    buttons.right.pointZone3 = right_button5;
    buttons.back_to_title = back_to_title_button;

    enableButtonOption(canvas, context, buttons);
}

//// 注意書きの画面 ////
export function ready(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 注意書き
    draw_caution(canvas, context);
    // 得点ゾーン表示ボタン
    let display_point_zone_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.7,    // y座標
        canvas.width * 0.85,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "得点ゾーン表示",        // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    display_point_zone_button.draw(canvas, context);

    enableButtonReady(canvas, context, display_point_zone_button);
}

//// お題出題フェーズ ////
export function question(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);
    
    // 画面上部のテキストを表示
    draw_text_of_the_top("正解の得点ゾーンを表示中...", canvas, context);
    // 半円形の用意
    draw_half_circle(canvas, context);
    // 得点ゾーンをランダムで設定
    gameParams.answer_degree = -Math.random() * 180;
    // 得点ゾーンの描画
    draw_point_zone(gameParams.answer_degree, canvas, context);
    // お題をランダムで設定
    gameParams.question_number = Math.floor(Math.random() * questions.length);
    if(gameParams.question_number == questions.length) gameParams.question_number -= 1;
    // お題の描画
    draw_question(questions[gameParams.question_number][0], questions[gameParams.question_number][1], canvas, context);
    // 「確認しました」ボタンの描画
    let confirmation_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.8,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "確認しました",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    confirmation_button.draw(canvas, context);

    let question_reset_button = new Button(
        canvas.width * 0.9,     // x座標
        canvas.height * 0.08,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.08,   // 縦幅
        "⟲",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    question_reset_button.draw(canvas, context);

    enableButtonQuestion(canvas, context, confirmation_button, question_reset_button);
}

//// 回答フェーズ ////
export function answer(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 画面上部のテキストを表示
    draw_text_of_the_top("出題者は具体例を出してください", canvas, context);
    // 現在の針の角度
    gameParams.theta = [];
    for(let i = 0; i < gameSettings.num_of_player - 1; i++){
        gameParams.theta[i] = -90;
    }
    // 半円形の用意
    draw_half_circle(canvas, context);
    // 針の描画
    draw_needle(gameParams.theta, canvas, context);
    // お題の描画
    draw_question(questions[gameParams.question_number][0], questions[gameParams.question_number][1], canvas, context);

    answerGameParams.current_player = 1;

    // 操作プレイヤー変更ボタンの描画
    let text_color = "";
    if(answerGameParams.current_player == 1) text_color = "rgb(200, 0, 0)";
    if(answerGameParams.current_player == 2) text_color = "rgb(0, 200, 0)";
    if(answerGameParams.current_player == 3) text_color = "rgb(0, 0, 200)";
    change_player_button = new Button(
        canvas.width * 0.3,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.5,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "P" + answerGameParams.current_player,   // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
        text_color,             // テキストカラー
    );
    change_player_button.draw(canvas, context);

    // 「答え合わせ (決定)」ボタンの描画
    let determination_button = new Button(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.3,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "決定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    determination_button.draw(canvas, context);

    enableMousedownListener(canvas, context, determination_button);
    enableMousemoveListener(canvas, context, determination_button);
    enableTouchmoveListener(canvas, context, determination_button);
    enableMouseupListener();
}

//// 答え合わせフェーズ ////
export function result(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 半円形の用意
    draw_half_circle(canvas, context);
    // 得点ゾーンの描画
    draw_point_zone(gameParams.answer_degree, canvas, context);
    // 針の描画
    draw_needle(gameParams.theta, canvas, context);
    // お題の描画
    draw_question(questions[gameParams.question_number][0], questions[gameParams.question_number][1], canvas, context);

    // 点数の判定
    let areas = judge();
    
    // 点数の描画
    draw_point(areas, canvas, context);

    // 「タイトルに戻る」ボタンの描画
    let go_back_to_title_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.85,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "タイトルに戻る",         // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    go_back_to_title_button.draw(canvas, context);

    enableButtonResult(canvas, context, go_back_to_title_button);
}