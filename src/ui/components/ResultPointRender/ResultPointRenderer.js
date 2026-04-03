import { canvas } from "../../../core/canvas/Canvas.js";
import { JUDGES } from "../../../game/scoring/judges.js";
import { gameSettings } from "../../../game/states/gameSettings.js";
import { drawBackGround, getBackGroundPosX } from "./internal/backGround.js";
import { getResultPointText, setStyleForText } from "./internal/pointText.js";

class ResultPointRenderer {

    constructor() {

    }

    draw(context, areas) {
        let texts = [];
        // 参加プレイヤーが2人の場合
        if(areas.length == 1){
            if(areas[0] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 2, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[0]);
            }
            else if(areas[0] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 2, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[1]);
            }
            else if(areas[0] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 2, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[2]);
            }
            else{
                texts[0] = getResultPointText(0);
            }
            // スタイルの決定
            setStyleForText(context);
            context.fillText(texts[0], canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
        }
        // 参加プレイヤーが3人の場合
        if(areas.length == 2){
            //// プレイヤー1の得点
            if(areas[0] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[0]);
            }
            else if(areas[0] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[1]);
            }
            else if(areas[0] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 3, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[2]);
            }
            else{
                texts[0] = getResultPointText(0);
            }
            // 点数をテキストとして描画
            setStyleForText(context);
            context.fillText(texts[0], canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(200, 0, 0)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.3, canvas.getWidth() * 0.04);

            //// プレイヤー2の得点
            if(areas[1] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: 2 }));
                texts[1] = getResultPointText(gameSettings.points[0]);
            }
            else if(areas[1] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: 2 }));
                texts[1] = getResultPointText(gameSettings.points[1]);
            }
            else if(areas[1] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 3, playerNumber: 2 }));
                texts[1] = getResultPointText(gameSettings.points[2]);
            }
            else{
                texts[1] = getResultPointText(0);
            }
            // 点数をテキストとして描画
            setStyleForText(context);
            context.fillText(texts[1], canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(0, 0, 200)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.7, canvas.getWidth() * 0.04);
        }
        // 参加プレイヤーが4人の場合
        if(areas.length == 3){
            //// プレイヤー1の得点
            if(areas[0] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[0]);
            }
            else if(areas[0] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[1]);
            }
            else if(areas[0] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 1 }));
                texts[0] = getResultPointText(gameSettings.points[2]);
            }
            else{
                texts[0] = getResultPointText(0);
            }
            // 点数をテキストとして描画
            setStyleForText(context);
            context.fillText(texts[0], canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(200, 0, 0)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.17, canvas.getWidth() * 0.04);

            //// プレイヤー2の得点
            if(areas[1] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 2 }));
                texts[1] = getResultPointText(gameSettings.points[0]);
            }
            else if(areas[1] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 2 }));
                texts[1] = getResultPointText(gameSettings.points[1]);
            }
            else if(areas[1] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 2 }));
                texts[1] = getResultPointText(gameSettings.points[2]);
            }
            else{
                texts[1] = getResultPointText(0);
            }
            // 点数をテキストとして描画
            setStyleForText(context);
            context.fillText(texts[1], canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(0, 0, 200)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.5, canvas.getWidth() * 0.04);

            //// プレイヤー3の得点
            if(areas[2] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 3 }));
                texts[2] = getResultPointText(gameSettings.points[0]);
            }
            else if(areas[2] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 3 }));
                texts[2] = getResultPointText(gameSettings.points[1]);
            }
            else if(areas[2] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: 3 }));
                texts[2] = getResultPointText(gameSettings.points[2]);
            }
            else{
                texts[2] = getResultPointText(0);
            }
            // 点数をテキストとして描画
            setStyleForText(context);
            context.fillText(texts[2], canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(0, 200, 0)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P3", canvas.getWidth() * 0.83, canvas.getWidth() * 0.04);
        }
    }
}

export const resultPointRenderer = new ResultPointRenderer();