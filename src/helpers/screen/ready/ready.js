import { drawCaution } from "./internal/drawCaution.js";
import { Button } from "../../../ui/components/Button.js";
import { canvas } from "../../../core/canvas/Canvas.js";
import { enableButtonReady } from "./internal/enableButtonReady.js";

//// 注意書きの画面 ////
export function ready(){
    canvas.reset();

    // 注意書き
    drawCaution(canvas.getContext());
    // 得点ゾーン表示ボタン
    let display_point_zone_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.7,    // y座標
        canvas.getWidth() * 0.85,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "得点ゾーン表示",        // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    display_point_zone_button.draw();

    enableButtonReady(display_point_zone_button);
}