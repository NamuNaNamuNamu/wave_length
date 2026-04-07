import { gameSettings } from "../states/gameSettings.js";
import { PLAYERS } from "./players.js";


class ActivePlayerChecker {

    constructor () {

    }

    getActivePlayer () {
        if (gameSettings.numPlayers === 2) {
            return [PLAYERS.PLAYER1];
        }
        if (gameSettings.numPlayers === 3) {
            return [PLAYERS.PLAYER1, PLAYERS.PLAYER2];
        }
        if (gameSettings.numPlayers === 4) {
            return [PLAYERS.PLAYER1, PLAYERS.PLAYER2, PLAYERS.PLAYER3];
        }
        else {
            throw Error("設定のプレイヤー数が想定しない値になっています。想定しない値: " + gameSettings.numPlayers);
        }
    }

    getNumActivePlayer() {
        return this.getActivePlayer().length;
    }
}

export const activePlayerChecker = new ActivePlayerChecker();