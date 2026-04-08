import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { controlPointZoneGood } from "./controlPointZoneGood.js";

export const leftButtonPointZoneGood = new ImageButtonReplaced({
    posX: controlPointZoneGood.getLeftButtonPosX(),
    posY: controlPointZoneGood.getLeftButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    onClick: () => {
        if(gameSettings.points.good > 1){
            gameSettings.points.good -= 1;
            screenManager.reDraw();
        }
    }
});

export const rightButtonPointZoneGood = new ImageButtonReplaced({
    posX: controlPointZoneGood.getRightButtonPosX(),
    posY: controlPointZoneGood.getRightButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    onClick: () => {
        if(gameSettings.points.good < 10){
            gameSettings.points.good += 1;
            screenManager.reDraw();
        }
    }
});