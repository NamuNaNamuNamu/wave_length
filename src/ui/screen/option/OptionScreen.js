import { buttonBackToTitle } from "./components/buttonBackToTitle.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "./components/buttonsNumPlayers.js";
import { leftButtonPointZoneGood, rightButtonPointZoneGood } from "./components/buttonsPointZoneGood.js";
import { leftButtonPointZoneGreat, rightButtonPointZoneGreat } from "./components/buttonsPointZoneGreat.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "./components/buttonsPointZonePerfect.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "./components/buttonsPointZoneSize.js";
import { enableButtonOption } from "./internal/enableButtonOption.js";
import { numPlayers } from "./internal/numPlayers.js";
import { pointZoneGood } from "./internal/pointZoneGood.js";
import { pointZoneGreat } from "./internal/pointZoneGreat.js";
import { pointZonePerfect } from "./internal/pointZonePerfect.js";
import { pointZoneSize } from "./internal/pointZoneSize.js";

class OptionScreen {
    constructor() {

    }

    draw(context) {
        leftButtonNumPlayers.show();
        rightButtonNumPlayers.show();
        leftButtonNumPlayers.draw(context);
        rightButtonNumPlayers.draw(context);
        numPlayers();
        leftButtonPointZoneSize.show();
        rightButtonPointZoneSize.show();
        leftButtonPointZoneSize.draw(context);
        rightButtonPointZoneSize.draw(context);
        pointZoneSize();
        leftButtonPointZonePerfect.show();
        rightButtonPointZonePerfect.show();
        leftButtonPointZonePerfect.draw(context);
        rightButtonPointZonePerfect.draw(context);
        pointZonePerfect();
        leftButtonPointZoneGreat.show();
        rightButtonPointZoneGreat.show();
        leftButtonPointZoneGreat.draw(context);
        rightButtonPointZoneGreat.draw(context);
        pointZoneGreat();
        leftButtonPointZoneGood.show();
        rightButtonPointZoneGood.show();
        leftButtonPointZoneGood.draw(context);
        rightButtonPointZoneGood.draw(context);
        pointZoneGood();

        // タイトルに戻るボタンの描画
        buttonBackToTitle.draw(context);
    }

    activate() {
        enableButtonOption();
    }
}

export const optionScreen = new OptionScreen();