import { drawSubLabel } from "../../components/drawSubLabel.js";
import { dispatchPointerToHitTargets } from "../../input/dispatchPointerToHitTargets.js";
import { pointerInput } from "../../input/PointerInput.js";
import { buttonBackToTitle } from "./components/buttonBackToTitle.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "./components/buttonsNumPlayers.js";
import { leftButtonPointZoneGood, rightButtonPointZoneGood } from "./components/buttonsPointZoneGood.js";
import { leftButtonPointZoneGreat, rightButtonPointZoneGreat } from "./components/buttonsPointZoneGreat.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "./components/buttonsPointZonePerfect.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "./components/buttonsPointZoneSize.js";
import { controlNumPlayers } from "./components/controlNumPlayers.js";
import { controlPointZoneGood } from "./components/controlPointZoneGood.js";
import { controlPointZoneGreat } from "./components/controlPointZoneGreat.js";
import { controlPointZonePerfect } from "./components/controlPointZonePerfect.js";
import { controlPointZoneSize } from "./components/controlPointZoneSize.js";

class OptionScreen {
    #buttons;
    #controls;
    
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

        this.#controls = [
            controlNumPlayers,
            controlPointZoneSize,
            controlPointZonePerfect,
            controlPointZoneGreat,
            controlPointZoneGood
        ];
    }

    draw(context) {
        drawSubLabel({
            context: context,
            label: "得点ゾーンの設定",
            posX: 0.03,
            posY: 0.29
        })

        for (let button of this.#buttons) {
            button.draw(context);
        }
        
        for (let control of this.#controls) {
            control.draw(context);
        }
    }

    activate() {
        pointerInput.onPointerDown((pointer) => {
            dispatchPointerToHitTargets({
                pointer: pointer,
                targets: this.#buttons
            });
        });
    }
}

export const optionScreen = new OptionScreen();