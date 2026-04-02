import { textRenderer } from "../../shared/renderer/TextRenderer.js";
import { halfCircle } from "../../../ui/components/HalfCircle.js";
import { Button } from "../../../ui/components/Button.js";
import { canvas } from "../../../core/canvas/Canvas.js";
import { gameParams } from "../../../game/states/gameParams.js";
import { needlesManager } from "../../shared/needle/NeedlesManager.js";
import { answerGameParams } from "../../../game/states/answerGameParams.js";
import { enableMousedownListener, enableMousemoveListener, enableMouseupListener, enableTouchmoveListener } from "./internal/eventListeners.js";
import { questionRenderer } from "../../question/renderer/QuestionRenderer.js";

export let change_player_button;

//// 回答フェーズ ////
export function answer(){
    canvas.reset();
    needlesManager.initialize();

    // 画面上部のテキストを表示
    textRenderer.draw_on_the_top(canvas.getContext(), "出題者は具体例を出してください");
    // 半円形の用意
    halfCircle.draw(canvas.getContext());
    // 針の描画
    needlesManager.drawAll(canvas.getContext());
    // お題の描画
    questionRenderer.draw(canvas.getContext(), gameParams.question);

    answerGameParams.current_player = 1;

    // 操作プレイヤー変更ボタンの描画
    let text_color = "";
    if(answerGameParams.current_player == 1) text_color = "rgb(200, 0, 0)";
    if(answerGameParams.current_player == 2) text_color = "rgb(0, 200, 0)";
    if(answerGameParams.current_player == 3) text_color = "rgb(0, 0, 200)";
    change_player_button = new Button(
        canvas.getWidth() * 0.3,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.5,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "P" + answerGameParams.current_player,   // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
        text_color,             // テキストカラー
    );
    change_player_button.draw();

    // 「答え合わせ (決定)」ボタンの描画
    let determination_button = new Button(
        canvas.getWidth() * 0.8,     // x座標
        canvas.getHeight() * 0.85,    // y座標
        canvas.getWidth() * 0.3,     // 横幅
        canvas.getHeight() * 0.15,   // 縦幅
        "決定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    determination_button.draw();

    enableMousedownListener(determination_button);
    enableMousemoveListener(determination_button);
    enableTouchmoveListener(determination_button);
    enableMouseupListener();
}