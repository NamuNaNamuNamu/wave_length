import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";

export const leftButtonPointZoneGood = new ImageButtonReplaced({
    posX: 0.6,
    posY: 0.73,
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
    posX: 0.8,
    posY: 0.73,
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