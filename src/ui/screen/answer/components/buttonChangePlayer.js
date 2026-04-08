import { activePlayerChecker } from "../../../../game/player/ActivePlayerChecker.js";
import { PLAYERS } from "../../../../game/player/players.js";
import { answerGameParams } from "../../../../game/states/answerGameParams.js";
import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";

export const buttonChangePlayer = new ButtonReplaced({
    posX: 0.3,
    posY: 0.85,
    width: 0.5,
    height: 0.15,
    text: () => `P${answerGameParams.current_player}`,
    textColor: () => getCurrentPlayerColor(),
    onClick: () => {
        answerGameParams.current_player = getNextPlayerNumber(answerGameParams.current_player);
        screenManager.reDraw();
    }
});

function getCurrentPlayerColor () {
    if(answerGameParams.current_player === PLAYERS.PLAYER1.number) { return PLAYERS.PLAYER1.color; }
    if(answerGameParams.current_player === PLAYERS.PLAYER2.number) { return PLAYERS.PLAYER2.color; }
    if(answerGameParams.current_player === PLAYERS.PLAYER3.number) { return PLAYERS.PLAYER3.color; }
    throw Error("現在のプレイヤーが想定しない値になっています。");
}

function getNextPlayerNumber (currentPlayerNumber) {
    if (currentPlayerNumber === activePlayerChecker.getNumActivePlayer()) {
        return PLAYERS.PLAYER1.number;
    }
    else {
        return currentPlayerNumber + 1;
    }
}