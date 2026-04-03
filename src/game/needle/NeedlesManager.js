import { canvas } from "../../core/canvas/Canvas.js";
import { activePlayerChecker } from "../player/ActivePlayerChecker.js";
import { PLAYERS } from "../player/players.js";
import { Needle } from "./internal/Needle.js";

export class NeedlesManager {
    #needles;

    constructor() {
        this.initialize();
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
                player: PLAYERS.PLAYER1,
                degree: -90,
                lineWidth: canvas.getWidth() * 0.01
            }),
            new Needle({
                player: PLAYERS.PLAYER2,
                degree: -135,
                lineWidth: canvas.getWidth() * 0.01
            }),
            new Needle({
                player: PLAYERS.PLAYER3,
                degree: -45,
                lineWidth: canvas.getWidth() * 0.01
            })
        ];
    }

    drawAll(context) {
        for (let i = activePlayerChecker.getNumActivePlayer() - 1; i >= 0; i--) {
            this.#needles[i].draw(context);
        }
    }
}

export const needlesManager = new NeedlesManager();