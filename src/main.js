//////////////
// main関数 //
/////////////

import { title } from "./ui/screen/title/title.js";
import { canvas } from "./core/canvas/Canvas.js";
import { halfCircle } from "./ui/components/HalfCircle.js";


export function main(){
    // ウィンドウに合わせてゲーム画面の大きさ合わせ
    canvas.resizeAdjustToWindowSize();
    halfCircle.adjustToCanvas(canvas);

    //// タイトル画面を表示 ////
    title();
}