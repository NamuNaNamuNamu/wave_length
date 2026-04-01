import { canvas } from "../canvas/Canvas.js";
import { gameSettings } from "../gameSettings.js";
import { Needle } from "./Needle.js";

export class NeedlesManager {
    #needles;

    constructor() {
        this.initialize();
    }

    getNumEnabledNeedles() {
        return gameSettings.num_of_player - 1;
    }

    getDegree(player) {
        let i = player - 1;
        return this.#needles[i].getDegree();
    }

    setDegree({ player, degree }) {
        let i = player - 1;
        this.#needles[i].setDegree(degree);
    }

    setLineWidth(lineWidth) {
        for (let needle of this.#needles) {
            needle.setLineWidth(lineWidth);
        }
    }

    initialize() {
        this.#needles = [
            new Needle({
                color: "rgb(200, 0, 0)",
                degree: -90,
                lineWidth: canvas.getWidth() * 0.01
            }),
            new Needle({
                color: "rgb(0, 0, 200)",
                degree: -90,
                lineWidth: canvas.getWidth() * 0.01
            }),
            new Needle({
                color: "rgb(0, 200, 0)",
                degree: -90,
                lineWidth: canvas.getWidth() * 0.01
            })
        ];
    }

    drawAll(context) {
        for (let i = this.getNumEnabledNeedles() - 1; i >= 0; i--) {
            this.#needles[i].draw(context);
        }
    }
}

export const needlesManager = new NeedlesManager();