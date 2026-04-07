import { ButtonReplaced } from "../../../components/Button/ButtonReplaced.js";
import { screenManager } from "../../ScreenManager.js";
import { titleScreen } from "../../title/TitleScreen.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "./buttonsNumPlayers.js";
import { leftButtonPointZoneGood, rightButtonPointZoneGood } from "./buttonsPointZoneGood.js";
import { leftButtonPointZoneGreat, rightButtonPointZoneGreat } from "./buttonsPointZoneGreat.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "./buttonsPointZonePerfect.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "./buttonsPointZoneSize.js";

export const buttonBackToTitle = new ButtonReplaced({
    posX: 0.5,
    posY: 0.9,
    width: 0.7,
    height: 0.15,
    text: "戻る",
    onClick: temp
});

function temp () {
    leftButtonNumPlayers.hide();
    rightButtonNumPlayers.hide();
    leftButtonPointZoneSize.hide();
    rightButtonPointZoneSize.hide();
    leftButtonPointZonePerfect.hide();
    rightButtonPointZonePerfect.hide();
    leftButtonPointZoneGreat.hide();
    rightButtonPointZoneGreat.hide();
    leftButtonPointZoneGood.hide();
    rightButtonPointZoneGood.hide();
    screenManager.navigateTo(titleScreen);
}