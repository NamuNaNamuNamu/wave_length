import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { controlPointZonePerfect } from "./controlPointZonePerfect.js";

export const leftButtonPointZonePerfect = new ImageButtonReplaced({
    posX: controlPointZonePerfect.getLeftButtonPosX(),
    posY: controlPointZonePerfect.getLeftButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    onClick: () => {
        if(gameSettings.points.perfect > 1){
            gameSettings.points.perfect -= 1;
            screenManager.reDraw();
        }
    }
});

export const rightButtonPointZonePerfect = new ImageButtonReplaced({
    posX: controlPointZonePerfect.getRightButtonPosX(),
    posY: controlPointZonePerfect.getRightButtonPosY(),
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    onClick: () => {
        if(gameSettings.points.perfect < 10){
            gameSettings.points.perfect += 1;
            screenManager.reDraw();
        }
    }
});