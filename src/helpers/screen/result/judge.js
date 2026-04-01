import { gameSettings } from "../../gameSettings.js";
import { needlesManager } from "../../shared/NeedlesManager.js";
import { pointZone } from "../../shared/PointZone.js";

export function judge() {
    let areas = [];
    for(let needleNumber = 1; needleNumber <= needlesManager.getNumEnabledNeedles(); needleNumber++){
        let i = needleNumber - 1;
        if(Math.abs(needlesManager.getDegree(needleNumber) - pointZone.getAnswerDegree()) <= gameSettings.area_size / 2){
            areas[i] = 0;
        }
        else if(Math.abs(needlesManager.getDegree(needleNumber) - pointZone.getAnswerDegree()) <= gameSettings.area_size / 2 * 3){
            areas[i] = 1;
        }
        else if(Math.abs(needlesManager.getDegree(needleNumber) - pointZone.getAnswerDegree()) <= gameSettings.area_size / 2 * 5){
            areas[i] = 2;
        }
        else{
            areas[i] = 3;
        }
    }

    return areas;
}