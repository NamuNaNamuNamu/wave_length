import { dispatchPointerToButtons } from "../../input/dispatchPointerToButtons.js";
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
            dispatchPointerToButtons({
                pointer: pointer,
                buttons: this.#buttons
            });
        });
    }
}

export const titleScreen = new TitleScreen();