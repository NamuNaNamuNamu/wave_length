import { draw_text_on_option } from "../../../function.js";
import { draw_number_on_option } from "../../../function.js";
import { area_size } from "../../../game.js";
import { ImageButton } from "../../../class.js";

export function pointZoneWidth(canvas, context) {
    draw_text_on_option("得点ゾーン１つの大きさ(度)", 0.27, canvas, context);
    draw_number_on_option(area_size, 0.7, 0.37, canvas, context);
    let triangle_left2 = new Image();
    let triangle_right2 = new Image();
    triangle_left2.src = "img/triangle_left.png";
    triangle_right2.src = "img/triangle_right.png";
    let left_button2 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.35,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left2, // 画像
    );
    let right_button2 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.35,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right2, // 画像
    );
    triangle_left2.onload = function(){
        left_button2.draw(canvas, context);
    };
    triangle_right2.onload = function(){
        right_button2.draw(canvas, context);
    };

    return [left_button2, right_button2];
}