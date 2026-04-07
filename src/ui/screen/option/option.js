import { Button } from "../../components/Button/Button.js";
import { canvas } from "../../../core/canvas/Canvas.js";
import { enableButtonOption } from "./internal/enableButtonOption.js";
import { numPlayers } from "./internal/numPlayers.js";
import { pointZone1 } from "./internal/pointZone1.js";
import { pointZone2 } from "./internal/pointZone2.js";
import { pointZone3 } from "./internal/pointZone3.js";
import { pointZoneSize } from "./internal/pointZoneSize.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "./components/buttonsNumPlayers.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "./components/buttonsPointZoneSize.js";

//// 設定画面 ////
export function option(){
    canvas.reset();
    leftButtonNumPlayers.show();
    rightButtonNumPlayers.show();
    leftButtonNumPlayers.draw(canvas.getContext());
    rightButtonNumPlayers.draw(canvas.getContext());
    numPlayers();
    leftButtonPointZoneSize.show();
    rightButtonPointZoneSize.show();
    leftButtonPointZoneSize.draw(canvas.getContext());
    rightButtonPointZoneSize.draw(canvas.getContext());
    pointZoneSize();
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
    buttons.left.numPlayers = leftButtonNumPlayers;
    buttons.right.numPlayers = rightButtonNumPlayers;
    buttons.left.pointZoneSize = leftButtonPointZoneSize;
    buttons.right.pointZoneSize = rightButtonPointZoneSize;
    buttons.left.pointZone1 = left_button3;
    buttons.right.pointZone1 = right_button3;
    buttons.left.pointZone2 = left_button4;
    buttons.right.pointZone2 = right_button4;
    buttons.left.pointZone3 = left_button5;
    buttons.right.pointZone3 = right_button5;
    buttons.back_to_title = back_to_title_button;

    enableButtonOption(buttons);
}