import { draw_text_on_option } from "../../../function.js";
import { draw_number_on_option } from "../../../function.js";
import { gameSettings } from "../../gameSettings.js";
import { ImageButton } from "../../Button.js";
import { canvasReplaced } from "../../Canvas.js";

export function numPlayers(canvas, context) {
    draw_text_on_option("プレイヤー数", 0.1);
    draw_number_on_option(gameSettings.num_of_player, 0.7, 0.1);
    let triangle_left1 = new Image();
    let triangle_right1 = new Image();
    triangle_left1.src = "img/triangle_left.png";
    triangle_right1.src = "img/triangle_right.png";
    let left_button1 = new ImageButton(
        canvasReplaced.getWidth() * 0.6,     // x座標
        canvasReplaced.getHeight() * 0.08,    // y座標
        canvasReplaced.getWidth() * 0.1,     // 横幅
        canvasReplaced.getHeight() * 0.1,   // 縦幅
        triangle_left1, // 画像
    );
    let right_button1 = new ImageButton(
        canvasReplaced.getWidth() * 0.8,     // x座標
        canvasReplaced.getHeight() * 0.08,    // y座標
        canvasReplaced.getWidth() * 0.1,     // 横幅
        canvasReplaced.getHeight() * 0.1,   // 縦幅
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