import { canvas } from "../../../core/canvas/Canvas.js";
import { PLAYERS } from "../../../game/players.js";
import { JUDGES } from "../../../game/scoring/judges.js";
import { drawBackGround, getBackGroundPosX } from "./internal/backGround.js";
import { drawResultPointText } from "./internal/pointText.js";

class ResultPointRenderer {

    constructor() {

    }

    draw(context, areas) {
        // 参加プレイヤーが2人の場合
        if(areas.length == 1){
            if(areas[0] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 2, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if(areas[0] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 2, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if(areas[0] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 2, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else{
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
        }
        // 参加プレイヤーが3人の場合
        if(areas.length == 2){
            //// プレイヤー1の得点
            if(areas[0] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            else if(areas[0] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            else if(areas[0] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            else{
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER1.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.3, canvas.getWidth() * 0.04);

            //// プレイヤー2の得点
            if(areas[1] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            else if(areas[1] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            else if(areas[1] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            else{
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER2.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.7, canvas.getWidth() * 0.04);
        }
        // 参加プレイヤーが4人の場合
        if(areas.length == 3){
            //// プレイヤー1の得点
            if(areas[0] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            else if(areas[0] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            else if(areas[0] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            else{
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER1.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.17, canvas.getWidth() * 0.04);

            //// プレイヤー2の得点
            if(areas[1] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if(areas[1] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if(areas[1] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else{
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER2.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.5, canvas.getWidth() * 0.04);

            //// プレイヤー3の得点
            if(areas[2] == 0){
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER3.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            else if(areas[2] == 1){
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER3.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            else if(areas[2] == 2){
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER3.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            else{
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER3.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P3", canvas.getWidth() * 0.83, canvas.getWidth() * 0.04);
        }
    }
}

export const resultPointRenderer = new ResultPointRenderer();