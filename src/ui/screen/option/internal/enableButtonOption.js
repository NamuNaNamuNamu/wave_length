import { gameSettings } from "../../../../game/states/gameSettings.js";
import { textRenderer } from "./TextRenderer.js";
import { canvas } from "../../../../core/canvas/Canvas.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";
import { eventListenerManager } from "../../EventListenerManager.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "../components/buttonsNumPlayers.js";
import { numPlayers } from "./numPlayers.js";
import { pointZoneSize } from "./pointZoneSize.js";
import { pointZonePerfect } from "./pointZonePerfect.js";

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
        buttons.left.pointZoneSize.receiveClick(posX, posY);
        buttons.right.pointZoneSize.receiveClick(posX, posY);
        // 左右ボタン3
        buttons.left.pointZonePerfect.receiveClick(posX, posY);
        buttons.right.pointZonePerfect.receiveClick(posX, posY);
        // 左右ボタン4
        if(buttons.left.pointZoneGreat.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[1] > 1){
                gameSettings.points[1] -= 1;
            }
        }
        if(buttons.right.pointZoneGreat.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[1] < 10){
                gameSettings.points[1] += 1;
            }
        }
        // 左右ボタン5
        if(buttons.left.pointZoneGood.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[2] > 1){
                gameSettings.points[2] -= 1;
            }
        }
        if(buttons.right.pointZoneGood.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points[2] < 10){
                gameSettings.points[2] += 1;
            }
        }

        canvas.reset();
        numPlayers();
        buttons.left.numPlayers.draw(canvas.getContext());
        buttons.right.numPlayers.draw(canvas.getContext());
        pointZoneSize();
        buttons.left.pointZoneSize.draw(canvas.getContext());
        buttons.right.pointZoneSize.draw(canvas.getContext());
        pointZonePerfect();
        buttons.left.pointZonePerfect.draw(canvas.getContext());
        buttons.right.pointZonePerfect.draw(canvas.getContext());
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
        buttons.left.pointZoneGreat.draw();
        buttons.right.pointZoneGreat.draw();
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
        buttons.left.pointZoneGood.draw();
        buttons.right.pointZoneGood.draw();
        buttons.back_to_title.draw();

        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(buttons.back_to_title.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            leftButtonNumPlayers.hide();
            rightButtonNumPlayers.hide();
            screenManager.navigateTo(titleScreen);
        }
    }
}