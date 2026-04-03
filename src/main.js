//////////////
// main関数 //
/////////////

import { canvas } from "./core/canvas/Canvas.js";
import { halfCircle } from "./ui/components/HalfCircle.js";
import { screenManager } from "./ui/screen/ScreenManager.js";
import { titleScreen } from "./ui/screen/title/TitleScreen.js";


export function main(){
    // ウィンドウに合わせてゲーム画面の大きさ合わせ
    canvas.resizeAdjustToWindowSize();
    halfCircle.adjustToCanvas(canvas);

    //// タイトル画面を表示 ////
    screenManager.navigateTo(titleScreen);
}