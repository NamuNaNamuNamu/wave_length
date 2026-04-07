import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { controlPointZoneSize } from "./controlPointZoneSize.js";

export const leftButtonPointZoneSize = new ImageButtonReplaced({
    posX: controlPointZoneSize.getLeftButtonPosX(),
    posY: controlPointZoneSize.getLeftButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    onClick: () => {
        if(gameSettings.pointZoneSize > 5){
            gameSettings.pointZoneSize -= 1;
            screenManager.reDraw();
        }
    }
});

export const rightButtonPointZoneSize = new ImageButtonReplaced({
    posX: controlPointZoneSize.getRightButtonPosX(),
    posY: controlPointZoneSize.getRightButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    onClick: () => {
        if(gameSettings.pointZoneSize < 20){
            gameSettings.pointZoneSize += 1;
            screenManager.reDraw();
        }
    }
});