import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";

export const leftButtonNumPlayers = new ImageButtonReplaced({
    posX: 0.6,
    posY: 0.08,
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
    posX: 0.8,
    posY: 0.08,
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