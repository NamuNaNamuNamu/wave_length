import { canvas } from "../../../../core/canvas/Canvas.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";
import { eventListenerManager } from "../../EventListenerManager.js";
import { numPlayers } from "./numPlayers.js";
import { pointZoneSize } from "./pointZoneSize.js";
import { pointZonePerfect } from "./pointZonePerfect.js";
import { pointZoneGreat } from "./pointZoneGreat.js";
import { pointZoneGood } from "./pointZoneGood.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "../components/buttonsNumPlayers.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "../components/buttonsPointZoneSize.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "../components/buttonsPointZonePerfect.js";
import { leftButtonPointZoneGreat, rightButtonPointZoneGreat } from "../components/buttonsPointZoneGreat.js";
import { leftButtonPointZoneGood, rightButtonPointZoneGood } from "../components/buttonsPointZoneGood.js";

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
        leftButtonPointZoneGreat.receiveClick(posX, posY);
        rightButtonPointZoneGreat.receiveClick(posX, posY);
        // 左右ボタン5
        leftButtonPointZoneGood.receiveClick(posX, posY);
        rightButtonPointZoneGood.receiveClick(posX, posY);

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
        pointZoneGreat();
        leftButtonPointZoneGreat.draw(canvas.getContext());
        rightButtonPointZoneGreat.draw(canvas.getContext());
        pointZoneGood();
        leftButtonPointZoneGood.draw(canvas.getContext());
        rightButtonPointZoneGood.draw(canvas.getContext());
        buttons.back_to_title.draw();

        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(buttons.back_to_title.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            leftButtonNumPlayers.hide();
            rightButtonNumPlayers.hide();
            leftButtonPointZoneSize.hide();
            rightButtonPointZoneSize.hide();
            leftButtonPointZonePerfect.hide();
            rightButtonPointZonePerfect.hide();
            leftButtonPointZoneGreat.hide();
            rightButtonPointZoneGreat.hide();
            leftButtonPointZoneGood.hide();
            rightButtonPointZoneGood.hide();
            screenManager.navigateTo(titleScreen);
        }
    }
}