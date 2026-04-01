//////////////
// main関数 //
/////////////

import { title } from "./helpers/screen/title/title.js";
import { canvas } from "./helpers/canvas/Canvas.js";
import { HalfCircle } from "./helpers/shared/HalfCircle.js";

export let halfCircle;

export function main(){
    // ウィンドウに合わせてゲーム画面の大きさ合わせ
    canvas.resizeAdjustToWindowSize();

    halfCircle = new HalfCircle({
        centerX: canvas.getWidth() * 0.5,
        centerY: canvas.getHeight() * 0.6,
        radius: canvas.getWidth() * 0.45,
        lineWidth: canvas.getWidth() * 0.02
    });

    //// タイトル画面を表示 ////
    title();
}