import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButtonReplaced } from "../../../components/Button/ImageButtonReplaced.js";

export const left_button1 = new ImageButtonReplaced({
    posX: 0.6,
    posY: 0.08,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_left.png",
    isVisible: false,
    onClick: () => {
        if(gameSettings.num_of_player > 2){
            gameSettings.num_of_player -= 1;
        }
    }
});

export const right_button1 = new ImageButtonReplaced({
    posX: 0.8,
    posY: 0.08,
    width: 0.1,
    height: 0.1,
    imageURL: "img/triangle_right.png",
    isVisible: false,
    onClick: () => {
        if(gameSettings.num_of_player < 4){
            gameSettings.num_of_player += 1;
        }
    }
});