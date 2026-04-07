import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";

export const leftButtonPointZoneSize = new ImageButtonReplaced({
    posX: 0.6,
    posY: 0.35,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    isVisible: false,
    onClick: () => {
        if(gameSettings.pointZoneSize > 5){
            gameSettings.pointZoneSize -= 1;
        }
    }
});

export const rightButtonPointZoneSize = new ImageButtonReplaced({
    posX: 0.8,
    posY: 0.35,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    isVisible: false,
    onClick: () => {
        if(gameSettings.pointZoneSize < 20){
            gameSettings.pointZoneSize += 1;
        }
    }
});