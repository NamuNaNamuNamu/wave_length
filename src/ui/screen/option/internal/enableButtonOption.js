import { gameSettings } from "../../../../game/states/gameSettings.js";
import { textRenderer } from "./TextRenderer.js";
import { canvas } from "../../../../core/canvas/Canvas.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";
import { eventListenerManager } from "../../EventListenerManager.js";
import { numPlayers } from "./numPlayers.js";
import { pointZoneSize } from "./pointZoneSize.js";
import { pointZonePerfect } from "./pointZonePerfect.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "../components/buttonsNumPlayers.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "../components/buttonsPointZoneSize.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "../components/buttonsPointZonePerfect.js";

export function enableButtonOption(buttons) {
    eventListenerManager.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();

        const posX = event.clientX - canvas.getBoundingClientRect().left;
        const posY = event.clientY - canvas.getBoundingClientRect().top;
        // 左右ボタン1
        leftButtonNumPlayers.receiveClick(posX, posY);
        rightButtonNumPlayers.receiveClick(posX, posY);
        // 左右ボタン2
        leftButtonPointZoneSize.receiveClick(posX, posY);
        rightButtonPointZoneSize.receiveClick(posX, posY);
        // 左右ボタン3
        leftButtonPointZonePerfect.receiveClick(posX, posY);
        rightButtonPointZonePerfect.receiveClick(posX, posY);
        // 左右ボタン4
        if(buttons.left.pointZoneGreat.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points.great > 1){
                gameSettings.points.great -= 1;
            }
        }
        if(buttons.right.pointZoneGreat.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points.great < 10){
                gameSettings.points.great += 1;
            }
        }
        // 左右ボタン5
        if(buttons.left.pointZoneGood.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points.good > 1){
                gameSettings.points.good -= 1;
            }
        }
        if(buttons.right.pointZoneGood.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(gameSettings.points.good < 10){
                gameSettings.points.good += 1;
            }
        }

        canvas.reset();
        numPlayers();
        leftButtonNumPlayers.draw(canvas.getContext());
        rightButtonNumPlayers.draw(canvas.getContext());
        pointZoneSize();
        leftButtonPointZoneSize.draw(canvas.getContext());
        rightButtonPointZoneSize.draw(canvas.getContext());
        pointZonePerfect();
        leftButtonPointZonePerfect.draw(canvas.getContext());
        rightButtonPointZonePerfect.draw(canvas.getContext());
        textRenderer.drawGameSetting({
            context: canvas.getContext(),
            text: "得点ゾーン２の得点",
            pos_x: canvas.getWidth() * 0.03,
            pos_y: canvas.getWidth() * 0.65
        });
        textRenderer.drawGameSettingValue({
            context: canvas.getContext(),
            value: gameSettings.points.great,
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
            value: gameSettings.points.good,
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
            leftButtonPointZoneSize.hide();
            rightButtonPointZoneSize.hide();
            leftButtonPointZonePerfect.hide();
            rightButtonPointZonePerfect.hide();
            screenManager.navigateTo(titleScreen);
        }
    }
}