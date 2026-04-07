import { Button } from "../../components/Button/Button.js";
import { canvas } from "../../../core/canvas/Canvas.js";
import { enableButtonOption } from "./internal/enableButtonOption.js";
import { numPlayers } from "./internal/numPlayers.js";
import { pointZonePerfect } from "./internal/pointZonePerfect.js";
import { pointZoneGreat } from "./internal/pointZoneGreat.js";
import { pointZoneGood } from "./internal/pointZoneGood.js";
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
    let [left_button3, right_button3] = pointZonePerfect();
    let [left_button4, right_button4] = pointZoneGreat();
    let [left_button5, right_button5] = pointZoneGood();

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
    buttons.left.pointZonePerfect = left_button3;
    buttons.right.pointZonePerfect = right_button3;
    buttons.left.pointZoneGreat = left_button4;
    buttons.right.pointZoneGreat = right_button4;
    buttons.left.pointZoneGood = left_button5;
    buttons.right.pointZoneGood = right_button5;
    buttons.back_to_title = back_to_title_button;

    enableButtonOption(buttons);
}