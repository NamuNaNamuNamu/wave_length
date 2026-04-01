//////////////
// main関数 //
/////////////

import { title } from "./game.js";
import { canvas } from "./helpers/canvas/Canvas.js";

// 半円の中心の x, y 座標
export let center_of_arc_x;
export let center_of_arc_y;
// 半円の半径
export let radius;

export function main(){
    // ウィンドウに合わせてゲーム画面の大きさ合わせ
    canvas.resizeAdjustToWindowSize();

    // 半円の中心の x, y 座標
    center_of_arc_x = canvas.getWidth() * 0.5;
    center_of_arc_y = canvas.getHeight() * 0.6;
    // 半円の半径
    radius = canvas.getWidth() * 0.45;

    //// タイトル画面を表示 ////
    title();
}