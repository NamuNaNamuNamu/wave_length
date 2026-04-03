import { canvas } from "../../../../core/canvas/Canvas.js";

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
            1: canvas.getWidth() * 0.35
        },
        3: {
            1: canvas.getWidth() * 0.15,
            2: canvas.getWidth() * 0.55
        },
        4: {
            1: canvas.getWidth() * 0.02,
            2: canvas.getWidth() * 0.35,
            3: canvas.getWidth() * 0.68
        }
    }

    return backGroundPosX[numPlayers]?.[playerNumber];
}