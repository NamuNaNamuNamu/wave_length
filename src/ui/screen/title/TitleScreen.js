import { dispatchPointerToHitTargets } from "../../input/dispatchPointerToHitTargets.js";
import { pointerInput } from "../../input/PointerInput.js";
import { optionButton } from "./components/optionButton.js";
import { startButton } from "./components/startButton.js";

class TitleScreen {
    #buttons;

    constructor() {
        this.#buttons = [
            startButton,
            optionButton
        ];
    }

    draw(context) {
        for (let button of this.#buttons) {
            button.draw(context);
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

export const titleScreen = new TitleScreen();