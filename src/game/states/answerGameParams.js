// 回答フェーズのみで使われる state 変数。
// TODO: フェーズを管理するクラスを追加したい。

import { PLAYERS } from "../players.js";

export const answerGameParams = {
    current_player: PLAYERS.PLAYER1.number
}