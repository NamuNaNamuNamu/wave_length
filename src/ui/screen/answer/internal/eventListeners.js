import { textRenderer } from "../../../components/TextRenderer.js";
import { gameParams } from "../../../../game/states/gameParams.js";
import { answerGameParams } from "../../../../game/states/answerGameParams.js";
import { halfCircle } from "../../../components/HalfCircle.js";
import { get_degree } from "../../../../core/utils/degree.js";
import { canvas } from "../../../../core/canvas/Canvas.js";
import { change_player_button } from "../answer.js";
import { result } from "../../result/result.js";
import { needlesManager } from "../../../../game/needle/NeedlesManager.js";
import { questionRenderer } from "../../../components/QuestionRenderer/QuestionRenderer.js";
import { PLAYERS } from "../../../../game/player/players.js";
import { activePlayerChecker } from "../../../../game/player/ActivePlayerChecker.js";

let x = new Array(1000);    // 指の数だけx座標を格納するための配列 (余裕を持って1000要素用意) 
let y = new Array(1000);    // 指の数だけy座標を格納するための配列 (余裕を持って1000要素用意)

//// 針のドラッグアンドドロップ機能 ////
let clicked = false; // クリックされているかどうか

let mousedownListener;
let mousemoveListener;
let touchmoveListener;
let mouseupListener;

export function enableMousedownListener(determination_button) {
    mousedownListener = (event) => {
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // もし「決定ボタン」で左クリックされた場合, 答え合わせフェーズに移行する
        if(determination_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            canvas.removeEventListener("mousemove", mousemoveListener, false);
            canvas.removeEventListener("touchmove", touchmoveListener, false);
            canvas.removeEventListener("mouseup", mouseupListener, false);
            result();
            return;
        }
        // もし 操作プレイヤー変更ボタン で左クリックされた場合, 針を操作するプレイヤーを変更する
        if(change_player_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if (answerGameParams.current_player === activePlayerChecker.getNumActivePlayer()) {
                answerGameParams.current_player = PLAYERS.PLAYER1.number;
            }
            else {
                answerGameParams.current_player++;
            }
        }
        // ボタンが押されてなければ, 針を移動させる
        clicked = true;
        // クリックされた時点でのマウスの場所の角度を算出
        let previous = needlesManager.getDegree(answerGameParams.current_player); // 一つ前の角度を保存しておく
        needlesManager.setDegree({
            player: answerGameParams.current_player,
            degree: get_degree(halfCircle.getCenterX(), halfCircle.getCenterY(), event.clientX, event.clientY)
        });
        // 決定ボタン以外で画面下半分がクリックされたら, 針は動かさない 
        if(needlesManager.getDegree(answerGameParams.current_player) > 0){
            needlesManager.setDegree({
                player: answerGameParams.current_player,
                degree: previous
            });
        }
        //// 各パーツの描画 ////
        canvas.reset();
        // 画面上部のテキストを表示
        textRenderer.draw_on_the_top(canvas.getContext(), "回答中...");
        // 半円形の用意
        halfCircle.draw(canvas.getContext());
        // 針の描画
        needlesManager.drawAll(canvas.getContext());
        // お題の描画
        questionRenderer.draw(canvas.getContext(), gameParams.question);
        // 操作プレイヤー変更ボタンの描画
        let text_color = "";
        if(answerGameParams.current_player == PLAYERS.PLAYER1.number) text_color = PLAYERS.PLAYER1.color;
        if(answerGameParams.current_player == PLAYERS.PLAYER2.number) text_color = PLAYERS.PLAYER2.color;
        if(answerGameParams.current_player == PLAYERS.PLAYER3.number) text_color = PLAYERS.PLAYER3.color;
        change_player_button.text = "P" + answerGameParams.current_player;
        change_player_button.text_color = text_color;
        change_player_button.draw();
        // 決定ボタンの描画
        determination_button.draw();
    }
    canvas.addEventListener("mousedown", mousedownListener, false);
}

export function enableMousemoveListener(determination_button) {
    mousemoveListener = (event) => {
        event.preventDefault();
        if(clicked){
            let canvas_rectangle = canvas.getBoundingClientRect();
            // もしもし 操作プレイヤー変更ボタン でマウスがドラッグされた場合, 何もしない
            if(change_player_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
                return;
            }
            // ドラッグされた時点でのマウスの場所の角度を算出
            needlesManager.setDegree({
                player: answerGameParams.current_player,
                degree: get_degree(halfCircle.getCenterX(), halfCircle.getCenterY(), event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)
            });
            // 針が半円の下半分に行かないようにする
            if(needlesManager.getDegree(answerGameParams.current_player) > 90){
                needlesManager.setDegree({
                    player: answerGameParams.current_player,
                    degree: -180
                });
            }
            else if(needlesManager.getDegree(answerGameParams.current_player) > 0){
                needlesManager.setDegree({
                    player: answerGameParams.current_player,
                    degree: 0
                });
            }
            //// 各パーツの描画 ////
            canvas.reset();
            // 画面上部のテキストを表示
            textRenderer.draw_on_the_top(canvas.getContext(), "回答中...");
            // 半円形の用意
            halfCircle.draw(canvas.getContext());
            // 針の描画
            needlesManager.drawAll(canvas.getContext());
            // お題の描画
            questionRenderer.draw(canvas.getContext(), gameParams.question);
            // 操作プレイヤー変更ボタンの描画
            change_player_button.draw();
            // 決定ボタンの描画
            determination_button.draw();
        }
    }
    canvas.addEventListener("mousemove", mousemoveListener, false);
}

export function enableTouchmoveListener(determination_button) {
    touchmoveListener = (event) => {
        event.preventDefault();
        for (let i = 0; i < event.changedTouches.length; i++) {
            let canvas_rectangle = canvas.getBoundingClientRect();
            x[i] = event.changedTouches[i].pageX - (canvas_rectangle.left + window.pageXOffset);
            y[i] = event.changedTouches[i].pageY - (canvas_rectangle.top + window.pageYOffset);

            // もしもし 操作プレイヤー変更ボタン で指がドラッグされた場合, 何もしない
            if(change_player_button.clicked(x[0], y[0])){
                return;
            }
            // ドラッグされた時点での指の場所の角度を算出
            needlesManager.setDegree({
                player: answerGameParams.current_player,
                degree: get_degree(halfCircle.getCenterX(), halfCircle.getCenterY(), x[0], y[0])
            });
            // 針が半円の下半分に行かないようにする
            if(needlesManager.getDegree(answerGameParams.current_player) > 90){
                needlesManager.setDegree({
                    player: answerGameParams.current_player,
                    degree: -180
                });
            }
            else if(needlesManager.getDegree(answerGameParams.current_player) > 0){
                needlesManager.setDegree({
                    player: answerGameParams.current_player,
                    degree: 0
                });
            }
            //// 各パーツの描画 ////
            canvas.reset();
            // 画面上部のテキストを表示
            textRenderer.draw_on_the_top(canvas.getContext(), "回答中...");
            // 半円形の用意
            halfCircle.draw(canvas.getContext());
            // 針の描画
            needlesManager.drawAll(canvas.getContext());
            // お題の描画
            questionRenderer.draw(canvas.getContext(), gameParams.question);
            // 操作プレイヤー変更ボタンの描画
            change_player_button.draw();
            // 決定ボタンの描画
            determination_button.draw();
        }
    }
    canvas.addEventListener("touchmove", touchmoveListener, false);
}

export function enableMouseupListener() {
    mouseupListener = (event) => {
        event.preventDefault();
        clicked = false;
    }
    canvas.addEventListener("mouseup", mouseupListener, false);
}
