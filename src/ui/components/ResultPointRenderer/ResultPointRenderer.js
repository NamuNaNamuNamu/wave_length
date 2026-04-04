import { canvas } from "../../../core/canvas/Canvas.js";
import { activePlayerChecker } from "../../../game/player/ActivePlayerChecker.js";
import { PLAYERS } from "../../../game/player/players.js";
import { JUDGES } from "../../../game/scoring/judges.js";
import { drawBackGround, getBackGroundPosX } from "./internal/backGround.js";
import { drawResultPointText } from "./internal/pointText.js";

class ResultPointRenderer {

    constructor() {

    }

    draw(context, judges) {
        if (activePlayerChecker.getNumActivePlayer() === 1) {
            if (judges[PLAYERS.PLAYER1.number] === JUDGES.PERFECT) {
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 2, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER1.number] === JUDGES.GREAT) {
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 2, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER1.number] === JUDGES.GOOD) {
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 2, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else {
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
        }
        if (activePlayerChecker.getNumActivePlayer() === 2) {
            if (judges[PLAYERS.PLAYER1.number] === JUDGES.PERFECT) {
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER1.number] === JUDGES.GREAT) {
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER1.number] === JUDGES.GOOD) {
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            else {
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER1.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.3, canvas.getWidth() * 0.04);

            if (judges[PLAYERS.PLAYER2.number] === JUDGES.PERFECT) {
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER2.number] === JUDGES.GREAT) {
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER2.number] === JUDGES.GOOD) {
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 3, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            else {
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER2.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.7, canvas.getWidth() * 0.04);
        }
        if (activePlayerChecker.getNumActivePlayer() === 3) {
            if (judges[PLAYERS.PLAYER1.number] === JUDGES.PERFECT) {
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER1.number] === JUDGES.GREAT) {
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER1.number] === JUDGES.GOOD) {
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER1.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            else {
                drawResultPointText(context, JUDGES.MISS, canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            }
            // どっちのプレイヤーか描画
            context.fillStyle = PLAYERS.PLAYER1.color;
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.17, canvas.getWidth() * 0.04);

            if (judges[PLAYERS.PLAYER2.number] === JUDGES.PERFECT) {
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER2.number] === JUDGES.GREAT) {
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER2.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER2.number] === JUDGES.GOOD) {
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

            if (judges[PLAYERS.PLAYER3.number] === JUDGES.PERFECT) {
                drawBackGround(context, JUDGES.PERFECT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER3.number }));
                drawResultPointText(context, JUDGES.PERFECT, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER3.number] === JUDGES.GREAT) {
                drawBackGround(context, JUDGES.GREAT.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER3.number }));
                drawResultPointText(context, JUDGES.GREAT, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            else if (judges[PLAYERS.PLAYER3.number] === JUDGES.GOOD) {
                drawBackGround(context, JUDGES.GOOD.color, getBackGroundPosX({ numPlayers: 4, playerNumber: PLAYERS.PLAYER3.number }));
                drawResultPointText(context, JUDGES.GOOD, canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            }
            else {
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