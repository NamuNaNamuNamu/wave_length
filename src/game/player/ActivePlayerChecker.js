import { gameSettings } from "../states/gameSettings.js";
import { PLAYERS } from "./players.js";


class ActivePlayerChecker {

    constructor () {

    }

    getActivePlayer () {
        if (gameSettings.num_of_player === 2) {
            return [PLAYERS.PLAYER1];
        }
        if (gameSettings.num_of_player === 3) {
            return [PLAYERS.PLAYER1, PLAYERS.PLAYER2];
        }
        if (gameSettings.num_of_player === 4) {
            return [PLAYERS.PLAYER1, PLAYERS.PLAYER2, PLAYERS.PLAYER3];
        }
        else {
            throw Error("設定のプレイヤー数が想定しない値になっています。想定しない値: " + gameSettings.num_of_player);
        }
    }
}

export const activePlayerChecker = new ActivePlayerChecker();