import { degree_to_rad } from "../../utils/degree.js";

export class HalfCircle {
    #centerX;
    #centerY;
    #radius;
    #lineWidth;

    constructor({ centerX, centerY, radius, lineWidth }) {
        this.#centerX = centerX;
        this.#centerY = centerY;
        this.#radius = radius;
        this.#lineWidth = lineWidth;
    }

    getCenterX() {
        return this.#centerX;
    }

    getCenterY() {
        return this.#centerY;
    }

    getRadius() {
        return this.#radius;
    }

    draw(context) {
        // パスの開始
        context.beginPath();
        // 弧を指定
        context.arc(this.#centerX, this.#centerY, this.#radius, degree_to_rad(-180), degree_to_rad(0), false); // 引数: (円弧の中心の x 座標, 円弧の中心の y 座標, 半径, 始まりの角度[rad], 終わりの角度[rad], 反時計回り{true} or 時計回り{false})
        // 枠線を描画
        context.strokeStyle = "rgb(0, 0, 0)";
        context.lineWidth = this.#lineWidth;
        context.stroke();
        // 塗りつぶし
        context.fillStyle = "rgb(255, 255, 255)";
        context.fill();
    }
}