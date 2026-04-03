import { canvas } from "../../core/canvas/Canvas.js";
import { PLAYERS } from "../players.js";
import { gameSettings } from "../states/gameSettings.js";
import { Needle } from "./internal/Needle.js";

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
                color: PLAYERS.PLAYER1.color,
                degree: -90,
                lineWidth: canvas.getWidth() * 0.01
            }),
            new Needle({
                color: PLAYERS.PLAYER2.color,
                degree: -135,
                lineWidth: canvas.getWidth() * 0.01
            }),
            new Needle({
                color: PLAYERS.PLAYER3.color,
                degree: -45,
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