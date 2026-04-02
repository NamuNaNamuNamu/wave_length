import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/gameSettings.js";
import { ImageButton } from "../../../../ui/components/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZoneWidth() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン１つの大きさ(度)",
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.27
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.area_size,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.37
    });
    let triangle_left2 = new Image();
    let triangle_right2 = new Image();
    triangle_left2.src = "img/triangle_left.png";
    triangle_right2.src = "img/triangle_right.png";
    let left_button2 = new ImageButton(
        canvas.getWidth() * 0.6,     // x座標
        canvas.getHeight() * 0.35,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_left2, // 画像
    );
    let right_button2 = new ImageButton(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.35,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_right2, // 画像
    );
    triangle_left2.onload = function(){
        left_button2.draw();
    };
    triangle_right2.onload = function(){
        right_button2.draw();
    };

    return [left_button2, right_button2];
}