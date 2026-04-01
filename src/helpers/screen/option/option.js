import { Button } from "../../Button.js";
import { canvas } from "../../canvas/Canvas.js";
import { enableButtonOption } from "./helpers/enableButtonOption.js";
import { numPlayers } from "./helpers/numPlayers.js";
import { pointZone1 } from "./helpers/pointZone1.js";
import { pointZone2 } from "./helpers/pointZone2.js";
import { pointZone3 } from "./helpers/pointZone3.js";
import { pointZoneWidth } from "./helpers/pointZoneWidth.js";

//// 設定画面 ////
export function option(){
    canvas.reset();
    let [left_button1, right_button1] = numPlayers();
    let [left_button2, right_button2] = pointZoneWidth();
    let [left_button3, right_button3] = pointZone1();
    let [left_button4, right_button4] = pointZone2();
    let [left_button5, right_button5] = pointZone3();

    // タイトルに戻るボタンの描画
    let back_to_title_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.9,    // y座標
        canvas.getWidth() * 0.7,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "戻る",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    back_to_title_button.draw();

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

    enableButtonOption(buttons);
}