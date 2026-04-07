import { gameSettings } from "../../../../game/states/gameSettings.js";
import { IncrementDecrementControl } from "../../../components/IncrementDecrementControl/IncrementDecrementControl.js";

export const controlPointZoneGreat = new IncrementDecrementControl({
    posX: 0.03,
    posY: 0.65,
    offsets: {
        valueX: 0.67,
        leftButtonX: 0.57,
        leftButtonY: -0.02,
        rightButtonX: 0.77,
        rightButtonY: -0.02
    },
    label: "great の得点",
    value: () => gameSettings.points.great
});