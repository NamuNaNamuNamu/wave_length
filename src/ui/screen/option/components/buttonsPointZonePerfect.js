import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";

export const leftButtonPointZonePerfect = new ImageButtonReplaced({
    posX: 0.6,
    posY: 0.53,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    onClick: () => {
        if(gameSettings.points.perfect > 1){
            gameSettings.points.perfect -= 1;
        }
    }
});

export const rightButtonPointZonePerfect = new ImageButtonReplaced({
    posX: 0.8,
    posY: 0.53,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    onClick: () => {
        if(gameSettings.points.perfect < 10){
            gameSettings.points.perfect += 1;
        }
    }
});