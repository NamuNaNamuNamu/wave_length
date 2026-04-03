import { canvas } from "../../../../core/canvas/Canvas.js";
import { PLAYERS } from "../../../../game/players.js";

export const drawBackGround = (context, color, backGroundPosX) => {
    const backGroundPosY = canvas.getWidth() * 0.05;
    const backGroundWidth = canvas.getWidth() * 0.3;
    const backGroundHeight = canvas.getWidth() * 0.06;

    context.fillStyle = color;
    context.fillRect(backGroundPosX, backGroundPosY, backGroundWidth, backGroundHeight);
}

export const getBackGroundPosX = ({ numPlayers, playerNumber }) => {
    const backGroundPosX = {
        2: {
            [PLAYERS.PLAYER1.number]: canvas.getWidth() * 0.35
        },
        3: {
            [PLAYERS.PLAYER1.number]: canvas.getWidth() * 0.15,
            [PLAYERS.PLAYER2.number]: canvas.getWidth() * 0.55
        },
        4: {
            [PLAYERS.PLAYER1.number]: canvas.getWidth() * 0.02,
            [PLAYERS.PLAYER2.number]: canvas.getWidth() * 0.35,
            [PLAYERS.PLAYER3.number]: canvas.getWidth() * 0.68
        }
    }

    return backGroundPosX[numPlayers]?.[playerNumber];
}