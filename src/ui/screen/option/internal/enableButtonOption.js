import { canvas } from "../../../../core/canvas/Canvas.js";
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
import { buttonBackToTitle } from "../components/buttonBackToTitle.js";

export function enableButtonOption() {
    eventListenerManager.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();

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

        buttonBackToTitle.draw(canvas.getContext());

        buttonBackToTitle.receiveClick(posX, posY);
    }
}