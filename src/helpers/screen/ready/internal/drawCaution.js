import { canvas } from "../../../canvas/Canvas.js";

// 準備画面のテキストの描画
export function drawCaution(context){
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    context.font = canvas.getHeight() * 0.05 + "px serif";
    context.fillText("出題者にのみ画面が見えるようにして", canvas.getWidth() * 0.5, canvas.getWidth() * 0.3);
    context.fillText("ボタンを押してください", canvas.getWidth() * 0.5, canvas.getWidth() * 0.4);
}