import { gameSettings } from "../../../../game/states/gameSettings.js";
import { textRenderer } from "./TextRenderer.js";
import { canvas } from "../../../../core/canvas/Canvas.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";
import { eventListenerManager } from "../../EventListenerManager.js";
import { left_button1, right_button1 } from "../components/buttonsNumPlayers.js";

export function enableButtonOption(buttons) {
    eventListenerManager.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();

        const posX = event.clientX - canvas.getBoundingClientRect().left;
        const posY = event.clientY - canvas.getBoundingClientRect().top;
        // 左右ボタン1
        buttons.left.numPlayers.receiveClick(posX, posY);
        buttons.right.numPlayers.receiveClick(posX, posY);
        // 左右ボタン2
        if(buttons.left.pointZoneSize.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.pointZoneSize > 5){
                gameSettings.pointZoneSize -= 1;
            }
        }
        if(buttons.right.pointZoneSize.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.pointZoneSize < 20){
                gameSettings.pointZoneSize += 1;
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

        canvas.reset();
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
        buttons.left.numPlayers.draw(canvas.getContext());
        buttons.right.numPlayers.draw(canvas.getContext());
        textRenderer.drawGameSetting({
            context: canvas.getContext(),
            text: "得点ゾーン１つの大きさ(度)",
            pos_x: canvas.getWidth() * 0.03,
            pos_y: canvas.getWidth() * 0.27
        });
        textRenderer.drawGameSettingValue({
            context: canvas.getContext(),
            value: gameSettings.pointZoneSize,
            pos_x: canvas.getWidth() * 0.7,
            pos_y: canvas.getWidth() * 0.37
        });
        buttons.left.pointZoneSize.draw();
        buttons.right.pointZoneSize.draw();
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
        buttons.left.pointZone1.draw();
        buttons.right.pointZone1.draw();
        textRenderer.drawGameSetting({
            context: canvas.getContext(),
            text: "得点ゾーン２の得点",
            pos_x: canvas.getWidth() * 0.03,
            pos_y: canvas.getWidth() * 0.65
        });
        textRenderer.drawGameSettingValue({
            context: canvas.getContext(),
            value: gameSettings.points[1],
            pos_x: canvas.getWidth() * 0.7,
            pos_y: canvas.getWidth() * 0.65
        });
        buttons.left.pointZone2.draw();
        buttons.right.pointZone2.draw();
        textRenderer.drawGameSetting({
            context: canvas.getContext(),
            text: "得点ゾーン３の得点",
            pos_x: canvas.getWidth() * 0.03,
            pos_y: canvas.getWidth() * 0.75
        });
        textRenderer.drawGameSettingValue({
            context: canvas.getContext(),
            value: gameSettings.points[2],
            pos_x: canvas.getWidth() * 0.7,
            pos_y: canvas.getWidth() * 0.75
        });
        buttons.left.pointZone3.draw();
        buttons.right.pointZone3.draw();
        buttons.back_to_title.draw();

        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(buttons.back_to_title.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            left_button1.hide();
            right_button1.hide();
            screenManager.navigateTo(titleScreen);
        }
    }
}