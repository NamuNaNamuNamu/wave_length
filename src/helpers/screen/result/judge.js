import { gameSettings } from "../../gameSettings.js";
import { gameParams } from "../../shared/gameParams.js";

export function judge() {
    let areas = [];
    for(let i = 0; i < gameSettings.num_of_player - 1; i++){
        if(Math.abs(gameParams.theta[i] - gameParams.answer_degree) <= gameSettings.area_size / 2){
            areas[i] = 0;
        }
        else if(Math.abs(gameParams.theta[i] - gameParams.answer_degree) <= gameSettings.area_size / 2 * 3){
            areas[i] = 1;
        }
        else if(Math.abs(gameParams.theta[i] - gameParams.answer_degree) <= gameSettings.area_size / 2 * 5){
            areas[i] = 2;
        }
        else{
            areas[i] = 3;
        }
    }

    return areas;
}