import { draw_text_on_option } from "../../../function.js";
import { draw_number_on_option } from "../../../function.js";
import { gameSettings } from "../../gameSettings.js";
import { ImageButton } from "../../Button.js";

export function pointZone1(canvas, context){
    draw_text_on_option("得点ゾーン１の得点", 0.55, canvas, context);
    draw_number_on_option(gameSettings.points[0], 0.7, 0.55, canvas, context);
    let triangle_left3 = new Image();
    let triangle_right3 = new Image();
    triangle_left3.src = "img/triangle_left.png";
    triangle_right3.src = "img/triangle_right.png";
    let left_button3 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.53,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left3, // 画像
    );
    let right_button3 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.53,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right3, // 画像
    );
    triangle_left3.onload = function(){
        left_button3.draw(canvas, context);
    };
    triangle_right3.onload = function(){
        right_button3.draw(canvas, context);
    };

    return [left_button3, right_button3];
}