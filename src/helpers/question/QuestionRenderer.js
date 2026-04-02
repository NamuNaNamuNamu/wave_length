import { canvas } from "../canvas/Canvas.js";

class QuestionRenderer {

    constructor() {

    }

    // FIXME: とりあえず処理はまんま移管した。
    // - 引数は question に修正すべし。
    // - 12文字ごとに改行を入れる処理は一般化したい。
    draw(content1, content2){
        let context = canvas.getContext();
        // スタイルの決定
        context.fillStyle = "rgb(0, 0, 0)";
        context.textAlign = "center";
        //// 矢印の描画
        context.font = canvas.getHeight() * 0.05 + "px serif";
        context.fillText("←", canvas.getWidth() * 0.2, canvas.getWidth() * 0.65);
        context.fillText("→", canvas.getWidth() * 0.8, canvas.getWidth() * 0.65);
        //// 12文字ごとに改行を入れる
        let sliced_c1 = [];
        let sliced_c2 = [];
        for (let i = 0; i < content1.length; i += 12) {
            sliced_c1.push(content1.slice(i, i + 12));
        }
        for (let i = 0; i < content2.length; i += 12) {
            sliced_c2.push(content2.slice(i, i + 12));
        }
    
        //// お題本体の描画
        context.font = canvas.getHeight() * 0.03 + "px serif";
        // 一方のお題
        for(let i = 0; i < sliced_c1.length; i++){
            context.fillText(sliced_c1[i], canvas.getWidth() * 0.2, canvas.getWidth() * (0.7 + 0.04 * i));
        }
        // もう一方のお題
        for(let i = 0; i < sliced_c2.length; i++){
            context.fillText(sliced_c2[i], canvas.getWidth() * 0.8, canvas.getWidth() * (0.7 + 0.04 * i));
        }
    }
}

export const questionRenderer = new QuestionRenderer();