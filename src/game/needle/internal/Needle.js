import { halfCircle } from "../../../ui/components/HalfCircle.js";

export class Needle {
    #player;
    #degree;
    #lineWidth;

    constructor({ player, degree, lineWidth }) {
        this.#player = player;
        this.#degree = degree;
        this.#lineWidth = lineWidth;
    }

    getDegree() {
        return this.#degree;
    }

    setDegree(degree) {
        this.#degree = degree;
    }

    setLineWidth(lineWidth) {
        this.#lineWidth = lineWidth;
    }

    draw(context) {
        // パスの開始
        context.beginPath();
        // 起点
        context.moveTo(halfCircle.getCenterX(), halfCircle.getCenterY());
        // 終点
        context.lineTo(halfCircle.getCenterX() + Math.cos(this.#degree * Math.PI / 180) * halfCircle.getRadius() * 0.8, halfCircle.getCenterY() + Math.sin(this.#degree * Math.PI / 180) * halfCircle.getRadius() * 0.8);
        // 描画
        context.strokeStyle = this.#player.color;
        context.lineWidth = this.#lineWidth;
        context.stroke();
    }
}