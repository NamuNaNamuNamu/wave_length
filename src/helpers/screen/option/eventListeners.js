import { gameSettings } from "../../../gameSettings.js";
import { canvas_reset } from "../../../function.js";
import { draw_text_on_option } from "../../../function.js";
import { draw_number_on_option } from "../../../function.js";
import { title } from "../../../game.js";

export function enableButtonOption(canvas, context, buttons) {
    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // 左右ボタン1
        if(buttons.left.numPlayers.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.num_of_player > 2){
                gameSettings.num_of_player -= 1;
            }
        }
        if(buttons.right.numPlayers.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.num_of_player < 4){
                gameSettings.num_of_player += 1;
            }
        }
        // 左右ボタン2
        if(buttons.left.pointZoneWidth.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.area_size > 5){
                gameSettings.area_size -= 1;
            }
        }
        if(buttons.right.pointZoneWidth.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.area_size < 20){
                gameSettings.area_size += 1;
            }
        }
        // 左右ボタン3
        if(buttons.left.pointZone1.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[0] > 1){
                gameSettings.points[0] -= 1;
            }
        }
        if(buttons.right.pointZone1.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[0] < 10){
                gameSettings.points[0] += 1;
            }
        }
        // 左右ボタン4
        if(buttons.left.pointZone2.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[1] > 1){
                gameSettings.points[1] -= 1;
            }
        }
        if(buttons.right.pointZone2.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[1] < 10){
                gameSettings.points[1] += 1;
            }
        }
        // 左右ボタン5
        if(buttons.left.pointZone3.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[2] > 1){
                gameSettings.points[2] -= 1;
            }
        }
        if(buttons.right.pointZone3.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[2] < 10){
                gameSettings.points[2] += 1;
            }
        }

        canvas_reset(canvas, context);
        draw_text_on_option("プレイヤー数", 0.1, canvas, context);
        draw_number_on_option(gameSettings.num_of_player, 0.7, 0.1, canvas, context);
        buttons.left.numPlayers.draw(canvas, context);
        buttons.right.numPlayers.draw(canvas, context);
        draw_text_on_option("得点ゾーン１つの大きさ(度)", 0.27, canvas, context);
        draw_number_on_option(gameSettings.area_size, 0.7, 0.37, canvas, context);
        buttons.left.pointZoneWidth.draw(canvas, context);
        buttons.right.pointZoneWidth.draw(canvas, context);
        draw_text_on_option("得点ゾーン１の得点", 0.55, canvas, context);
        draw_number_on_option(gameSettings.points[0], 0.7, 0.55, canvas, context);
        buttons.left.pointZone1.draw(canvas, context);
        buttons.right.pointZone1.draw(canvas, context);
        draw_text_on_option("得点ゾーン２の得点", 0.65, canvas, context);
        draw_number_on_option(gameSettings.points[1], 0.7, 0.65, canvas, context);
        buttons.left.pointZone2.draw(canvas, context);
        buttons.right.pointZone2.draw(canvas, context);
        draw_text_on_option("得点ゾーン３の得点", 0.75, canvas, context);
        draw_number_on_option(gameSettings.points[2], 0.7, 0.75, canvas, context);
        buttons.left.pointZone3.draw(canvas, context);
        buttons.right.pointZone3.draw(canvas, context);
        buttons.back_to_title.draw(canvas, context);

        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(buttons.back_to_title.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            title(canvas, context);
        }
    }
}