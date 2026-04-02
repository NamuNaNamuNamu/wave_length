import { canvas } from "../../../canvas/Canvas.js";
import { gameSettings } from "../../../gameSettings.js";

class ResultPointRenderer {

    constructor() {

    }

    draw(context, areas) {
        let texts = [];
        // 参加プレイヤーが2人の場合
        if(areas.length == 1){
            if(areas[0] == 0){
                context.fillStyle = "rgb(240, 240, 80)";
                context.fillRect(canvas.getWidth() * 0.35, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[0] + "点！！！";
            }
            else if(areas[0] == 1){
                context.fillStyle = "rgb(250, 175, 80)";
                context.fillRect(canvas.getWidth() * 0.35, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[1] + "点！！";
            }
            else if(areas[0] == 2){
                context.fillStyle = "rgb(225, 225, 200)";
                context.fillRect(canvas.getWidth() * 0.35, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[2] + "点！";
            }
            else{
                texts[0] = 0 + "点...";
            }
            // スタイルの決定
            context.fillStyle = "rgb(0, 0, 0)";
            context.textAlign = "center";
            context.font = canvas.getHeight() * 0.05 + "px serif";
            context.fillText(texts[0], canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
        }
        // 参加プレイヤーが3人の場合
        if(areas.length == 2){
            //// プレイヤー1の得点
            if(areas[0] == 0){
                context.fillStyle = "rgb(240, 240, 80)";
                context.fillRect(canvas.getWidth() * 0.15, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[0] + "点！！！";
            }
            else if(areas[0] == 1){
                context.fillStyle = "rgb(250, 175, 80)";
                context.fillRect(canvas.getWidth() * 0.15, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[1] + "点！！";
            }
            else if(areas[0] == 2){
                context.fillStyle = "rgb(225, 225, 200)";
                context.fillRect(canvas.getWidth() * 0.15, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[2] + "点！";
            }
            else{
                texts[0] = 0 + "点...";
            }
            // 点数をテキストとして描画
            context.fillStyle = "rgb(0, 0, 0)";
            context.textAlign = "center";
            context.font = canvas.getHeight() * 0.05 + "px serif";
            context.fillText(texts[0], canvas.getWidth() * 0.3, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(200, 0, 0)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.3, canvas.getWidth() * 0.04);

            //// プレイヤー2の得点
            if(areas[1] == 0){
                context.fillStyle = "rgb(240, 240, 80)";
                context.fillRect(canvas.getWidth() * 0.55, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[1] = gameSettings.points[0] + "点！！！";
            }
            else if(areas[1] == 1){
                context.fillStyle = "rgb(250, 175, 80)";
                context.fillRect(canvas.getWidth() * 0.55, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[1] = gameSettings.points[1] + "点！！";
            }
            else if(areas[1] == 2){
                context.fillStyle = "rgb(225, 225, 200)";
                context.fillRect(canvas.getWidth() * 0.55, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[1] = gameSettings.points[2] + "点！";
            }
            else{
                texts[1] = 0 + "点...";
            }
            // 点数をテキストとして描画
            context.fillStyle = "rgb(0, 0, 0)";
            context.textAlign = "center";
            context.font = canvas.getHeight() * 0.05 + "px serif";
            context.fillText(texts[1], canvas.getWidth() * 0.7, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(0, 0, 200)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.7, canvas.getWidth() * 0.04);
        }
        // 参加プレイヤーが4人の場合
        if(areas.length == 3){
            //// プレイヤー1の得点
            if(areas[0] == 0){
                context.fillStyle = "rgb(240, 240, 80)";
                context.fillRect(canvas.getWidth() * 0.02, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[0] + "点！！！";
            }
            else if(areas[0] == 1){
                context.fillStyle = "rgb(250, 175, 80)";
                context.fillRect(canvas.getWidth() * 0.02, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[1] + "点！！";
            }
            else if(areas[0] == 2){
                context.fillStyle = "rgb(225, 225, 200)";
                context.fillRect(canvas.getWidth() * 0.02, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[0] = gameSettings.points[2] + "点！";
            }
            else{
                texts[0] = 0 + "点...";
            }
            // 点数をテキストとして描画
            context.fillStyle = "rgb(0, 0, 0)";
            context.textAlign = "center";
            context.font = canvas.getHeight() * 0.05 + "px serif";
            context.fillText(texts[0], canvas.getWidth() * 0.17, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(200, 0, 0)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P1", canvas.getWidth() * 0.17, canvas.getWidth() * 0.04);

            //// プレイヤー2の得点
            if(areas[1] == 0){
                context.fillStyle = "rgb(240, 240, 80)";
                context.fillRect(canvas.getWidth() * 0.35, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[1] = gameSettings.points[0] + "点！！！";
            }
            else if(areas[1] == 1){
                context.fillStyle = "rgb(250, 175, 80)";
                context.fillRect(canvas.getWidth() * 0.35, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[1] = gameSettings.points[1] + "点！！";
            }
            else if(areas[1] == 2){
                context.fillStyle = "rgb(225, 225, 200)";
                context.fillRect(canvas.getWidth() * 0.35, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[1] = gameSettings.points[2] + "点！";
            }
            else{
                texts[1] = 0 + "点...";
            }
            // 点数をテキストとして描画
            context.fillStyle = "rgb(0, 0, 0)";
            context.textAlign = "center";
            context.font = canvas.getHeight() * 0.05 + "px serif";
            context.fillText(texts[1], canvas.getWidth() * 0.5, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(0, 0, 200)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P2", canvas.getWidth() * 0.5, canvas.getWidth() * 0.04);

            //// プレイヤー3の得点
            if(areas[2] == 0){
                context.fillStyle = "rgb(240, 240, 80)";
                context.fillRect(canvas.getWidth() * 0.68, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[2] = gameSettings.points[0] + "点！！！";
            }
            else if(areas[2] == 1){
                context.fillStyle = "rgb(250, 175, 80)";
                context.fillRect(canvas.getWidth() * 0.68, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[2] = gameSettings.points[1] + "点！！";
            }
            else if(areas[2] == 2){
                context.fillStyle = "rgb(225, 225, 200)";
                context.fillRect(canvas.getWidth() * 0.68, canvas.getWidth() * 0.05, canvas.getWidth() * 0.3, canvas.getWidth() * 0.06);
                texts[2] = gameSettings.points[2] + "点！";
            }
            else{
                texts[2] = 0 + "点...";
            }
            // 点数をテキストとして描画
            context.fillStyle = "rgb(0, 0, 0)";
            context.textAlign = "center";
            context.font = canvas.getHeight() * 0.05 + "px serif";
            context.fillText(texts[2], canvas.getWidth() * 0.83, canvas.getWidth() * 0.1);
            // どっちのプレイヤーか描画
            context.fillStyle = "rgb(0, 200, 0)";
            context.font = canvas.getHeight() * 0.03 + "px serif";
            context.fillText("P3", canvas.getWidth() * 0.83, canvas.getWidth() * 0.04);
        }
    }
}

export const resultPointRenderer = new ResultPointRenderer();