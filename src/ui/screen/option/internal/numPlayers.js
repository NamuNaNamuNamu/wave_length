import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButton } from "../../../components/Button/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function numPlayers() {
    textRenderer.drawGameSetting({
            context: canvas.getContext(),
            text: "プレイヤー数",
            pos_x: canvas.getWidth() * 0.03,
            pos_y: canvas.getWidth() * 0.1
        });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.num_of_player,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.1
    });
    let triangle_left1 = new Image();
    let triangle_right1 = new Image();
    triangle_left1.src = "img/triangle_left.png";
    triangle_right1.src = "img/triangle_right.png";
    let left_button1 = new ImageButton(
        canvas.getWidth() * 0.6,     // x座標
        canvas.getHeight() * 0.08,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_left1, // 画像
    );
    let right_button1 = new ImageButton(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.08,    // y座標
        canvas.getWidth() * 0.1,     // 横幅
        canvas.getHeight() * 0.1,   // 縦幅
        triangle_right1, // 画像
    );
    triangle_left1.onload = function(){
        left_button1.draw();
    };
    triangle_right1.onload = function(){
        right_button1.draw();
    };

    return [left_button1, right_button1];
}