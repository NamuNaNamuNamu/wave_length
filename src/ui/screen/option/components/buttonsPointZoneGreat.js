import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";

export const leftButtonPointZoneGreat = new ImageButtonReplaced({
    posX: 0.6,
    posY: 0.63,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    isVisible: false,
    onClick: () => {
        if(gameSettings.points.great > 1){
            gameSettings.points.great -= 1;
        }
    }
});

export const rightButtonPointZoneGreat = new ImageButtonReplaced({
    posX: 0.8,
    posY: 0.63,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    isVisible: false,
    onClick: () => {
        if(gameSettings.points.great < 10){
            gameSettings.points.great += 1;
        }
    }
});