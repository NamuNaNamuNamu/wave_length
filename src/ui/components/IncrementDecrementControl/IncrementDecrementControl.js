import { drawLabel } from "./internal/drawLabel.js";
import { drawValue } from "./internal/drawValue.js";
import { validateOffsets } from "./internal/validateOffsets.js";

export class IncrementDecrementControl {
    #posX;
    #posY;
    #offsets;
    #label;
    #value;

    constructor ({ posX, posY, offsets, label, value }) {
        this.#posX = posX;
        this.#posY = posY;
        this.#offsets = validateOffsets(offsets);
        this.#label = label;
        this.#value = value;
    }

    getValuePosX () {
        return this.#posX + this.#offsets.valueX;
    }

    getValuePosY () {
        return this.#posY+ this.#offsets.valueY;
    }

    getLeftButtonPosX () {
        return this.#posX + this.#offsets.leftButtonX;
    }

    getLeftButtonPosY () {
        return this.#posY + this.#offsets.leftButtonY;
    }

    getRightButtonPosX () {
        return this.#posX + this.#offsets.rightButtonX;
    }

    getRightButtonPosY () {
        return this.#posY + this.#offsets.rightButtonY;
    }

    draw(context) {
        drawLabel ({
            context: context,
            label: this.#label,
            posX: this.#posX,
            posY: this.#posY
        });

        drawValue ({
            context: context,
            value: this.#value(),
            posX: this.getValuePosX(),
            posY: this.getValuePosY()
        });
    }
}