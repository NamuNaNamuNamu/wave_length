import { dispatchPointerToButtons } from "../../input/dispatchPointerToButtons.js";
import { pointerInput } from "../../input/PointerInput.js";
import { buttonBackToTitle } from "./components/buttonBackToTitle.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "./components/buttonsNumPlayers.js";
import { leftButtonPointZoneGood, rightButtonPointZoneGood } from "./components/buttonsPointZoneGood.js";
import { leftButtonPointZoneGreat, rightButtonPointZoneGreat } from "./components/buttonsPointZoneGreat.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "./components/buttonsPointZonePerfect.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "./components/buttonsPointZoneSize.js";
import { numPlayers } from "./internal/numPlayers.js";
import { pointZoneGood } from "./internal/pointZoneGood.js";
import { pointZoneGreat } from "./internal/pointZoneGreat.js";
import { pointZonePerfect } from "./internal/pointZonePerfect.js";
import { pointZoneSize } from "./internal/pointZoneSize.js";

class OptionScreen {
    #buttons;
    
    constructor() {
        this.#buttons = [
            leftButtonNumPlayers,
            rightButtonNumPlayers,
            leftButtonPointZoneSize,
            rightButtonPointZoneSize,
            leftButtonPointZonePerfect,
            rightButtonPointZonePerfect,
            leftButtonPointZoneGreat,
            rightButtonPointZoneGreat,
            leftButtonPointZoneGood,
            rightButtonPointZoneGood,

            buttonBackToTitle
        ];
    }

    draw(context) {
        for (let button of this.#buttons) {
            button.draw(context);
        }
        numPlayers();
        pointZoneSize();
        pointZonePerfect();
        pointZoneGreat();
        pointZoneGood();
    }

    activate() {
        pointerInput.onPointerDown((pointer) => {
            dispatchPointerToButtons({
                pointer: pointer,
                buttons: this.#buttons
            });
        });
    }
}

export const optionScreen = new OptionScreen();