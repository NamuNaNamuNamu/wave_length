import { resultPointRenderer } from "../../components/ResultPointRenderer/ResultPointRenderer.js";
import { scoreZoneDetector } from "../../../game/scoring/ScoreZoneDetector.js";
import { Button } from "../../components/Button/Button.js";
import { canvas } from "../../../core/canvas/Canvas.js";
import { gameParams } from "../../../game/states/gameParams.js";
import { enableButtonResult } from "./internal/enableButtonResult.js";
import { halfCircle } from "../../components/HalfCircle.js";
import { pointZone } from "../../../game/PointZone.js";
import { needlesManager } from "../../../game/needle/NeedlesManager.js";
import { questionRenderer } from "../../components/QuestionRenderer/QuestionRenderer.js";
import { resultPointFormatter } from "../../components/ResultPointRenderer/ResultPointFormatter.js";

//// 答え合わせフェーズ ////
export function result(){
    canvas.reset();

    // 半円形の用意
    halfCircle.draw(canvas.getContext());
    // 得点ゾーンの描画
    pointZone.draw(canvas.getContext());
    // 針の描画
    needlesManager.drawAll(canvas.getContext());
    // お題の描画
    questionRenderer.draw(canvas.getContext(), gameParams.question);

    // 点数の判定
    const judges = scoreZoneDetector.judgeAll();
    const formattedJudges = resultPointFormatter.format(judges); // TODO: アウトプットを judges ではなく、scores にしたい。もっというと、renderer がアホになれる設計に組み替えたい。
    
    // 点数の描画
    resultPointRenderer.draw(canvas.getContext(), formattedJudges);

    // 「タイトルに戻る」ボタンの描画
    let go_back_to_title_button = new Button(
        canvas.getWidth() * 0.5,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.85,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "タイトルに戻る",         // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    go_back_to_title_button.draw();

    enableButtonResult(go_back_to_title_button);
}