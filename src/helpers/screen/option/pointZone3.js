import { draw_text_on_option } from "../../../function.js";
import { draw_number_on_option } from "../../../function.js";
import { gameSettings } from "../../../gameSettings.js";
import { ImageButton } from "../../../class.js";

export function pointZone3(canvas, context) {
    draw_text_on_option("得点ゾーン３の得点", 0.75, canvas, context);
    draw_number_on_option(gameSettings.points[2], 0.7, 0.75, canvas, context);
    let triangle_left5 = new Image();
    let triangle_right5 = new Image();
    triangle_left5.src = "img/triangle_left.png";
    triangle_right5.src = "img/triangle_right.png";
    let left_button5 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.73,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left5, // 画像
    );
    let right_button5 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.73,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right5, // 画像
    );
    triangle_left5.onload = function(){
        left_button5.draw(canvas, context);
    };
    triangle_right5.onload = function(){
        right_button5.draw(canvas, context);
    };

    return [left_button5, right_button5];
}