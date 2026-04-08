import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { controlPointZoneGreat } from "./controlPointZoneGreat.js";

export const leftButtonPointZoneGreat = new ImageButtonReplaced({
    posX: controlPointZoneGreat.getLeftButtonPosX(),
    posY: controlPointZoneGreat.getLeftButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    onClick: () => {
        if(gameSettings.points.great > 1){
            gameSettings.points.great -= 1;
            screenManager.reDraw();
        }
    }
});

export const rightButtonPointZoneGreat = new ImageButtonReplaced({
    posX: controlPointZoneGreat.getRightButtonPosX(),
    posY: controlPointZoneGreat.getRightButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    onClick: () => {
        if(gameSettings.points.great < 10){
            gameSettings.points.great += 1;
            screenManager.reDraw();
        }
    }
});