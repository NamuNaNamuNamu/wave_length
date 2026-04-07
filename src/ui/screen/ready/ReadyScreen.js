import { dispatchPointerToButtons } from "../../input/dispatchPointerToButtons.js";
import { pointerInput } from "../../input/PointerInput.js";
import { buttonDisplayPointZone } from "./components/buttonDisplayPointZone.js";
import { drawCaution } from "./internal/drawCaution.js";

class ReadyScreen {
    #buttons;

    constructor() {
        this.#buttons = [
            buttonDisplayPointZone
        ];
    }

    draw(context) {
        drawCaution(context);

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

export const readyScreen = new ReadyScreen();