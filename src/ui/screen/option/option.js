import { canvas } from "../../../core/canvas/Canvas.js";
import { enableButtonOption } from "./internal/enableButtonOption.js";
import { numPlayers } from "./internal/numPlayers.js";
import { pointZonePerfect } from "./internal/pointZonePerfect.js";
import { pointZoneGreat } from "./internal/pointZoneGreat.js";
import { pointZoneGood } from "./internal/pointZoneGood.js";
import { pointZoneSize } from "./internal/pointZoneSize.js";
import { leftButtonNumPlayers, rightButtonNumPlayers } from "./components/buttonsNumPlayers.js";
import { leftButtonPointZoneSize, rightButtonPointZoneSize } from "./components/buttonsPointZoneSize.js";
import { leftButtonPointZonePerfect, rightButtonPointZonePerfect } from "./components/buttonsPointZonePerfect.js";
import { leftButtonPointZoneGreat, rightButtonPointZoneGreat } from "./components/buttonsPointZoneGreat.js";
import { leftButtonPointZoneGood, rightButtonPointZoneGood } from "./components/buttonsPointZoneGood.js";
import { buttonBackToTitle } from "./components/buttonBackToTitle.js";

//// 設定画面 ////
export function option(){
    canvas.reset();
    leftButtonNumPlayers.show();
    rightButtonNumPlayers.show();
    leftButtonNumPlayers.draw(canvas.getContext());
    rightButtonNumPlayers.draw(canvas.getContext());
    numPlayers();
    leftButtonPointZoneSize.show();
    rightButtonPointZoneSize.show();
    leftButtonPointZoneSize.draw(canvas.getContext());
    rightButtonPointZoneSize.draw(canvas.getContext());
    pointZoneSize();
    leftButtonPointZonePerfect.show();
    rightButtonPointZonePerfect.show();
    leftButtonPointZonePerfect.draw(canvas.getContext());
    rightButtonPointZonePerfect.draw(canvas.getContext());
    pointZonePerfect();
    leftButtonPointZoneGreat.show();
    rightButtonPointZoneGreat.show();
    leftButtonPointZoneGreat.draw(canvas.getContext());
    rightButtonPointZoneGreat.draw(canvas.getContext());
    pointZoneGreat();
    leftButtonPointZoneGood.show();
    rightButtonPointZoneGood.show();
    leftButtonPointZoneGood.draw(canvas.getContext());
    rightButtonPointZoneGood.draw(canvas.getContext());
    pointZoneGood();

    // タイトルに戻るボタンの描画
    buttonBackToTitle.draw(canvas.getContext());

    enableButtonOption();
}