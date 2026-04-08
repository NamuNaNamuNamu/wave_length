import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { controlNumPlayers } from "./controlNumPlayers.js";

export const leftButtonNumPlayers = new ImageButtonReplaced({
    posX: controlNumPlayers.getLeftButtonPosX(),
    posY: controlNumPlayers.getLeftButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    onClick: () => {
        if(gameSettings.numPlayers > 2){
            gameSettings.numPlayers -= 1;
            screenManager.reDraw();
        }
    }
});

export const rightButtonNumPlayers = new ImageButtonReplaced({
    posX: controlNumPlayers.getRightButtonPosX(),
    posY: controlNumPlayers.getRightButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    onClick: () => {
        if(gameSettings.numPlayers < 4){
            gameSettings.numPlayers += 1;
            screenManager.reDraw();
        }
    }
});