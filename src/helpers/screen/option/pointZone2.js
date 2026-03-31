import { draw_text_on_option } from "../../../function.js";
import { draw_number_on_option } from "../../../function.js";
import { gameSettings } from "../../gameSettings.js";
import { ImageButton } from "../../Button.js";
import { canvasReplaced } from "../../Canvas.js";

export function pointZone2(canvas, context){
    draw_text_on_option("得点ゾーン２の得点", 0.65, canvas, context);
    draw_number_on_option(gameSettings.points[1], 0.7, 0.65, canvas, context);
    let triangle_left4 = new Image();
    let triangle_right4 = new Image();
    triangle_left4.src = "img/triangle_left.png";
    triangle_right4.src = "img/triangle_right.png";
    let left_button4 = new ImageButton(
        canvasReplaced.getWidth() * 0.6,     // x座標
        canvasReplaced.getHeight() * 0.63,    // y座標
        canvasReplaced.getWidth() * 0.1,     // 横幅
        canvasReplaced.getHeight() * 0.1,   // 縦幅
        triangle_left4, // 画像
    );
    let right_button4 = new ImageButton(
        canvasReplaced.getWidth() * 0.8,     // x座標
        canvasReplaced.getHeight() * 0.63,    // y座標
        canvasReplaced.getWidth() * 0.1,     // 横幅
        canvasReplaced.getHeight() * 0.1,   // 縦幅
        triangle_right4, // 画像
    );
    triangle_left4.onload = function(){
        left_button4.draw(canvas, context);
    };
    triangle_right4.onload = function(){
        right_button4.draw(canvas, context);
    };

    return [left_button4, right_button4];
}