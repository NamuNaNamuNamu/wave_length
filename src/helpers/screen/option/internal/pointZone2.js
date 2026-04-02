import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../gameSettings.js";
import { ImageButton } from "../../../../ui/components/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZone2() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン２の得点",
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.65
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.points[1],
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.65
    });
    let triangle_left4 = new Image();
    let triangle_right4 = new Image();
    triangle_left4.src = "img/triangle_left.png";
    triangle_right4.src = "img/triangle_right.png";
    let left_button4 = new ImageButton(
        canvas.getWidth() * 0.6,     // x座標
        canvas.getHeight() * 0.63,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_left4, // 画像
    );
    let right_button4 = new ImageButton(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.63,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_right4, // 画像
    );
    triangle_left4.onload = function(){
        left_button4.draw();
    };
    triangle_right4.onload = function(){
        right_button4.draw();
    };

    return [left_button4, right_button4];
}