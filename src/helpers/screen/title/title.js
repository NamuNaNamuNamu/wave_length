import { Button } from "../../Button.js";
import { canvas } from "../../canvas/Canvas.js";
import { enableButtonTitle } from "./internal/enableButtonTitle.js";

//// タイトル画面 ////
export function title(){
    canvas.reset();

    // スタートボタンの描画
    let start_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.3,    // y座標
        canvas.getWidth() * 0.6,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "スタート",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    start_button.draw();

    // オプションボタンの描画
    let option_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.7,    // y座標
        canvas.getWidth() * 0.6,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "設定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    option_button.draw();

    enableButtonTitle(start_button, option_button);
}