import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButton } from "../../../components/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZone1() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン１の得点",
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.55
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.points[0],
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.55
    });
    let triangle_left3 = new Image();
    let triangle_right3 = new Image();
    triangle_left3.src = "img/triangle_left.png";
    triangle_right3.src = "img/triangle_right.png";
    let left_button3 = new ImageButton(
        canvas.getWidth() * 0.6,     // x座標
        canvas.getHeight() * 0.53,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_left3, // 画像
    );
    let right_button3 = new ImageButton(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.53,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_right3, // 画像
    );
    triangle_left3.onload = function(){
        left_button3.draw();
    };
    triangle_right3.onload = function(){
        right_button3.draw();
    };

    return [left_button3, right_button3];
}