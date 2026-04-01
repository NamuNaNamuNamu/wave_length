import { halfCircle } from "../../main.js";
import { degree_to_rad } from "../../utils/degree.js";
import { canvas } from "../canvas/Canvas.js";
import { gameSettings } from "../gameSettings.js";


export class PointZone {
    #answerDegree;

    constructor({ answerDegree }) {
        this.#answerDegree = answerDegree;
    }

    draw(context) {
        const COLORS = ["rgb(225, 225, 200)", "rgb(250, 175, 80)", "rgb(240, 240, 80)", "rgb(250, 175, 80)", "rgb(225, 225, 200)"];
        for(let i = 0; i < 5; i++){
            // パスの開始
            context.beginPath();
            // 起点
            context.moveTo(halfCircle.centerX, halfCircle.centerY);
            // 弧を指定
            context.arc(halfCircle.centerX, halfCircle.centerY, halfCircle.radius, degree_to_rad(this.#answerDegree - gameSettings.area_size * 2.5 + i * gameSettings.area_size), degree_to_rad(this.#answerDegree - gameSettings.area_size * 1.5 + i * gameSettings.area_size), false); // 引数: (円弧の中心の x 座標, 円弧の中心の y 座標, 半径, 始まりの角度[rad], 終わりの角度[rad], 反時計回り{true} or 時計回り{false})
            // 塗りつぶし
            context.fillStyle = COLORS[i];
            context.fill();
    
            // はみ出した部分を抜き出す
            // 灰色で染める
            context.fillStyle = "rgb(230, 230, 230)";
            context.fillRect(0, halfCircle.centerY, canvas.getWidth(), canvas.getHeight() - halfCircle.centerY);
        }
    }

    getAnswerDegree() {
        return this.#answerDegree;
    }

    setRandom() {
        this.#answerDegree = -Math.random() * 180;
    }
}

export const pointZone = new PointZone(-90);