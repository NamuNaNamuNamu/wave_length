//////////////
// main関数 //
/////////////

import { title } from "./helpers/screen/title/title.js";
import { canvas } from "./helpers/canvas/Canvas.js";
import { halfCircle } from "./helpers/shared/HalfCircle.js";


export function main(){
    // ウィンドウに合わせてゲーム画面の大きさ合わせ
    canvas.resizeAdjustToWindowSize();
    halfCircle.adjustToCanvas(canvas);

    //// タイトル画面を表示 ////
    title();
}