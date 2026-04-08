import { dispatchPointerToClickTargets } from "../../input/dispatchPointerToHitTargets.js";
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
            dispatchPointerToClickTargets({
                pointer: pointer,
                targets: this.#buttons
            });
        });
    }
}

export const readyScreen = new ReadyScreen();