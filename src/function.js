import { center_of_arc_x, center_of_arc_y, radius } from "./main.js";
import { gameSettings } from "./helpers/gameSettings.js";
import { degree_to_rad } from "./utils/degree.js";
import { canvas } from "./helpers/Canvas.js";

// 半円形の描画
export function draw_half_circle(){
    let context = canvas.getContext();
    // パスの開始
    context.beginPath();
    // 弧を指定
    context.arc(center_of_arc_x, center_of_arc_y, radius, degree_to_rad(-180), degree_to_rad(0), false); // 引数: (円弧の中心の x 座標, 円弧の中心の y 座標, 半径, 始まりの角度[rad], 終わりの角度[rad], 反時計回り{true} or 時計回り{false})
    // 枠線を描画
    context.strokeStyle = "rgb(0, 0, 0)";
    context.lineWidth = canvas.getWidth() * 0.02;
    context.stroke();
    // 塗りつぶし
    context.fillStyle = "rgb(255, 255, 255)";
    context.fill();
}

// 得点ゾーンの描画
export function draw_point_zone(degree){
    let context = canvas.getContext();
    const COLORS = ["rgb(225, 225, 200)", "rgb(250, 175, 80)", "rgb(240, 240, 80)", "rgb(250, 175, 80)", "rgb(225, 225, 200)"];
    for(let i = 0; i < 5; i++){
        // パスの開始
        context.beginPath();
        // 起点
        context.moveTo(center_of_arc_x, center_of_arc_y);
        // 弧を指定
        context.arc(center_of_arc_x, center_of_arc_y, radius, degree_to_rad(degree - gameSettings.area_size * 2.5 + i * gameSettings.area_size), degree_to_rad(degree - gameSettings.area_size * 1.5 + i * gameSettings.area_size), false); // 引数: (円弧の中心の x 座標, 円弧の中心の y 座標, 半径, 始まりの角度[rad], 終わりの角度[rad], 反時計回り{true} or 時計回り{false})
        // 塗りつぶし
        context.fillStyle = COLORS[i];
        context.fill();

        // はみ出した部分を抜き出す
        // 灰色で染める
        context.fillStyle = "rgb(230, 230, 230)";
        context.fillRect(0, center_of_arc_y, canvas.getWidth(), canvas.getHeight() - center_of_arc_y);
    }
}

// 針の描画
export function draw_needle(degrees){
    let context = canvas.getContext();
    const COLORS = ["rgb(200, 0, 0)", "rgb(0, 0, 200)", "rgb(0, 200, 0)"];
    for(let i = degrees.length; i >= 0; i--){
        // パスの開始
        context.beginPath();
        // 起点
        context.moveTo(center_of_arc_x, center_of_arc_y);
        // 終点
        context.lineTo(center_of_arc_x + Math.cos(degrees[i] * Math.PI / 180) * radius * 0.8, center_of_arc_y + Math.sin(degrees[i] * Math.PI / 180) * radius * 0.8);
        // 描画
        context.strokeStyle = COLORS[i];
        context.lineWidth = canvas.getWidth() * 0.01;
        context.stroke();
    }
}

// お題の描画
export function draw_question(content1, content2){
    let context = canvas.getContext();
    // スタイルの決定
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    //// 矢印の描画
    context.font = canvas.getHeight() * 0.05 + "px serif";
    context.fillText("←", canvas.getWidth() * 0.2, canvas.getWidth() * 0.65);
    context.fillText("→", canvas.getWidth() * 0.8, canvas.getWidth() * 0.65);
    //// 12文字ごとに改行を入れる
    let sliced_c1 = [];
    let sliced_c2 = [];
    for (let i = 0; i < content1.length; i += 12) {
        sliced_c1.push(content1.slice(i, i + 12));
    }
    for (let i = 0; i < content2.length; i += 12) {
        sliced_c2.push(content2.slice(i, i + 12));
    }

    //// お題本体の描画
    context.font = canvas.getHeight() * 0.03 + "px serif";
    // 一方のお題
    for(let i = 0; i < sliced_c1.length; i++){
        context.fillText(sliced_c1[i], canvas.getWidth() * 0.2, canvas.getWidth() * (0.7 + 0.04 * i));
    }
    // もう一方のお題
    for(let i = 0; i < sliced_c2.length; i++){
        context.fillText(sliced_c2[i], canvas.getWidth() * 0.8, canvas.getWidth() * (0.7 + 0.04 * i));
    }
}

// 準備画面のテキストの描画
export function draw_caution(){
    let context = canvas.getContext();
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    context.font = canvas.getHeight() * 0.05 + "px serif";
    context.fillText("出題者にのみ画面が見えるようにして", canvas.getWidth() * 0.5, canvas.getWidth() * 0.3);
    context.fillText("ボタンを押してください", canvas.getWidth() * 0.5, canvas.getWidth() * 0.4);
}

// 画面上部のテキストの描画
export function draw_text_of_the_top(text){
    let context = canvas.getContext();
    context.fillStyle = "rgb(200, 0, 0)";
    context.textAlign = "left";
    context.font = canvas.getHeight() * 0.05 + "px serif";
    context.fillText(text, canvas.getWidth() * 0.01, canvas.getWidth() * 0.06);
}

// 結果画面での得点の描画
export function draw_point(areas){
    let context = canvas.getContext();
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

// 設定画面での各種設定テキストの描画
export function draw_text_on_option(text, y){
    let context = canvas.getContext();
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "left";
    context.font = canvas.getHeight() * 0.05 + "px serif";
    context.fillText(text, canvas.getWidth() * 0.03, canvas.getWidth() * y);
}

export function draw_number_on_option(num, x, y){
    let context = canvas.getContext();
    context.fillStyle = "rgb(0, 0, 0)";
    context.textAlign = "center";
    context.font = canvas.getHeight() * 0.05 + "px serif";
    context.fillText(num, canvas.getWidth() * x, canvas.getWidth() * y);
}