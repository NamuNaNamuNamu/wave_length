import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButton } from "../../../components/Button/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZoneGood() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン３の得点", // TODO: 名称を変更する。得点ゾーン関連の設定は親をまとめてもいいかも。
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.75
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.points.good,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.75
    });
    let triangle_left5 = new Image();
    let triangle_right5 = new Image();
    triangle_left5.src = "img/triangle_left.png";
    triangle_right5.src = "img/triangle_right.png";
    let left_button5 = new ImageButton(
        canvas.getWidth() * 0.6,     // x座標
        canvas.getHeight() * 0.73,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_left5, // 画像
    );
    let right_button5 = new ImageButton(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.73,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_right5, // 画像
    );
    triangle_left5.onload = function(){
        left_button5.draw();
    };
    triangle_right5.onload = function(){
        right_button5.draw();
    };

    return [left_button5, right_button5];
}