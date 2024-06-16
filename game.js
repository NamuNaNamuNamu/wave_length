////// ゲームに必要なパラメータ //////
let question_number; // 何番目のお題をランダムに選んだか
let theta = []; // 針の角度(左から プレイヤー 1, 2, 3)
let answer_degree = 0; // 正解の角度
let num_of_player = 2; // 参加プレイヤー数
let area_size = 10; // 1つの得点エリアのサイズ(度)
let points = [5, 3, 1]; // 各得点ゾーンの得点

let x = new Array(1000);    // 指の数だけx座標を格納するための配列 (余裕を持って1000要素用意) 
let y = new Array(1000);    // 指の数だけy座標を格納するための配列 (余裕を持って1000要素用意)

//// タイトル画面 ////
function title(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // スタートボタンの描画
    let start_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.3,    // y座標
        canvas.width * 0.6,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "スタート",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    start_button.draw(canvas, context);

    // オプションボタンの描画
    let option_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.7,    // y座標
        canvas.width * 0.6,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "設定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    option_button.draw(canvas, context);

    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(start_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            ready(canvas, context);
        }
        // 設定ボタンが押されたら設定画面に移動する
        if(option_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            option(canvas, context);
        }
    }
}

//// 設定画面 ////
function option(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 得点ゾーン1つ分の大きさの設定
    draw_text_on_option("プレイヤー数", 0.1, canvas, context);
    draw_number_on_option(num_of_player, 0.7, 0.1, canvas, context);
    let triangle_left1 = new Image();
    let triangle_right1 = new Image();
    triangle_left1.src = "img/triangle_left.png";
    triangle_right1.src = "img/triangle_right.png";
    let left_button1 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.08,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left1, // 画像
    );
    let right_button1 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.08,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right1, // 画像
    );
    triangle_left1.onload = function(){
        left_button1.draw(canvas, context);
    };
    triangle_right1.onload = function(){
        right_button1.draw(canvas, context);
    };

    // 得点ゾーン1つ分の大きさの設定
    draw_text_on_option("得点ゾーン１つの大きさ(度)", 0.27, canvas, context);
    draw_number_on_option(area_size, 0.7, 0.37, canvas, context);
    let triangle_left2 = new Image();
    let triangle_right2 = new Image();
    triangle_left2.src = "img/triangle_left.png";
    triangle_right2.src = "img/triangle_right.png";
    let left_button2 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.35,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left2, // 画像
    );
    let right_button2 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.35,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right2, // 画像
    );
    triangle_left2.onload = function(){
        left_button2.draw(canvas, context);
    };
    triangle_right2.onload = function(){
        right_button2.draw(canvas, context);
    };

    // 得点ゾーン１の得点
    draw_text_on_option("得点ゾーン１の得点", 0.55, canvas, context);
    draw_number_on_option(points[0], 0.7, 0.55, canvas, context);
    let triangle_left3 = new Image();
    let triangle_right3 = new Image();
    triangle_left3.src = "img/triangle_left.png";
    triangle_right3.src = "img/triangle_right.png";
    let left_button3 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.53,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left3, // 画像
    );
    let right_button3 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.53,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right3, // 画像
    );
    triangle_left3.onload = function(){
        left_button3.draw(canvas, context);
    };
    triangle_right3.onload = function(){
        right_button3.draw(canvas, context);
    };

    // 得点ゾーン２の得点
    draw_text_on_option("得点ゾーン２の得点", 0.65, canvas, context);
    draw_number_on_option(points[1], 0.7, 0.65, canvas, context);
    let triangle_left4 = new Image();
    let triangle_right4 = new Image();
    triangle_left4.src = "img/triangle_left.png";
    triangle_right4.src = "img/triangle_right.png";
    let left_button4 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.63,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left4, // 画像
    );
    let right_button4 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.63,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right4, // 画像
    );
    triangle_left4.onload = function(){
        left_button4.draw(canvas, context);
    };
    triangle_right4.onload = function(){
        right_button4.draw(canvas, context);
    };

    // 得点ゾーン２の得点
    draw_text_on_option("得点ゾーン３の得点", 0.75, canvas, context);
    draw_number_on_option(points[2], 0.7, 0.75, canvas, context);
    let triangle_left5 = new Image();
    let triangle_right5 = new Image();
    triangle_left5.src = "img/triangle_left.png";
    triangle_right5.src = "img/triangle_right.png";
    let left_button5 = new ImageButton(
        canvas.width * 0.6,     // x座標
        canvas.height * 0.73,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_left5, // 画像
    );
    let right_button5 = new ImageButton(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.73,    // y座標
        canvas.width * 0.1,     // 横幅
        canvas.height * 0.1,   // 縦幅
        triangle_right5, // 画像
    );
    triangle_left5.onload = function(){
        left_button5.draw(canvas, context);
    };
    triangle_right5.onload = function(){
        right_button5.draw(canvas, context);
    };

    // タイトルに戻るボタンの描画
    let back_to_title_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.9,    // y座標
        canvas.width * 0.7,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "戻る",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    back_to_title_button.draw(canvas, context);

    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // 左右ボタン1
        if(left_button1.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(num_of_player > 2){
                num_of_player -= 1;
            }
        }
        if(right_button1.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(num_of_player < 4){
                num_of_player += 1;
            }
        }
        // 左右ボタン2
        if(left_button2.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(area_size > 5){
                area_size -= 1;
            }
        }
        if(right_button2.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(area_size < 20){
                area_size += 1;
            }
        }
        // 左右ボタン3
        if(left_button3.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(points[0] > 1){
                points[0] -= 1;
            }
        }
        if(right_button3.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(points[0] < 10){
                points[0] += 1;
            }
        }
        // 左右ボタン4
        if(left_button4.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(points[1] > 1){
                points[1] -= 1;
            }
        }
        if(right_button4.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(points[1] < 10){
                points[1] += 1;
            }
        }
        // 左右ボタン5
        if(left_button5.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(points[2] > 1){
                points[2] -= 1;
            }
        }
        if(right_button5.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(points[2] < 10){
                points[2] += 1;
            }
        }

        canvas_reset(canvas, context);
        draw_text_on_option("プレイヤー数", 0.1, canvas, context);
        draw_number_on_option(num_of_player, 0.7, 0.1, canvas, context);
        left_button1.draw(canvas, context);
        right_button1.draw(canvas, context);
        draw_text_on_option("得点ゾーン１つの大きさ(度)", 0.27, canvas, context);
        draw_number_on_option(area_size, 0.7, 0.37, canvas, context);
        left_button2.draw(canvas, context);
        right_button2.draw(canvas, context);
        draw_text_on_option("得点ゾーン１の得点", 0.55, canvas, context);
        draw_number_on_option(points[0], 0.7, 0.55, canvas, context);
        left_button3.draw(canvas, context);
        right_button3.draw(canvas, context);
        draw_text_on_option("得点ゾーン２の得点", 0.65, canvas, context);
        draw_number_on_option(points[1], 0.7, 0.65, canvas, context);
        left_button4.draw(canvas, context);
        right_button4.draw(canvas, context);
        draw_text_on_option("得点ゾーン３の得点", 0.75, canvas, context);
        draw_number_on_option(points[2], 0.7, 0.75, canvas, context);
        left_button5.draw(canvas, context);
        right_button5.draw(canvas, context);
        back_to_title_button.draw(canvas, context);

        // スタートボタンがクリックされたらお題出題フェーズに移行する
        if(back_to_title_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            title(canvas, context);
        }
    }
}

//// 注意書きの画面 ////
function ready(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 注意書き
    draw_caution(canvas, context);
    // 得点ゾーン表示ボタン
    let display_point_zone_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.7,    // y座標
        canvas.width * 0.85,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "得点ゾーン表示",        // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    display_point_zone_button.draw(canvas, context);

    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // 得点ゾーン表示ボタンがクリックされたらお題出題フェーズに移行する
        if(display_point_zone_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            question(canvas, context);
        }
    }
}

//// お題出題フェーズ ////
function question(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);
    
    // 画面上部のテキストを表示
    draw_text_of_the_top("正解の得点ゾーンを表示中...", canvas, context);
    // 半円形の用意
    draw_half_circle(canvas, context);
    // 得点ゾーンをランダムで設定
    answer_degree = -Math.random() * 180;
    // 得点ゾーンの描画
    draw_point_zone(answer_degree, canvas, context);
    // お題をランダムで設定
    question_number = Math.floor(Math.random() * questions.length);
    if(question_number == questions.length) question_number -= 1;
    // お題の描画
    draw_question(questions[question_number][0], questions[question_number][1], canvas, context);
    // 「確認しました」ボタンの描画
    let confirmation_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.8,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "確認しました",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    confirmation_button.draw(canvas, context);

    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        // スタートボタンがクリックされたらお題出題フェーズに移行する
        let canvas_rectangle = canvas.getBoundingClientRect();
        if(confirmation_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            answer(canvas, context);
        }
    }
}

//// 回答フェーズ ////
function answer(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 現在針を操作できるプレイヤー
    let current_player = 1;

    // 画面上部のテキストを表示
    draw_text_of_the_top("出題者は具体例を出してください", canvas, context);
    // 現在の針の角度
    theta = [];
    for(let i = 0; i < num_of_player - 1; i++){
        theta[i] = -90;
    }
    // 半円形の用意
    draw_half_circle(canvas, context);
    // 針の描画
    draw_needle(theta, canvas, context);
    // お題の描画
    draw_question(questions[question_number][0], questions[question_number][1], canvas, context);
    // 操作プレイヤー変更ボタンの描画
    let text_color = "";
    if(current_player == 1) text_color = "rgb(200, 0, 0)";
    if(current_player == 2) text_color = "rgb(0, 200, 0)";
    if(current_player == 3) text_color = "rgb(0, 0, 200)";
    let change_player_button = new Button(
        canvas.width * 0.3,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.5,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "P" + current_player,   // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
        text_color,             // テキストカラー
    );
    change_player_button.draw(canvas, context);

    // 「答え合わせ (決定)」ボタンの描画
    let determination_button = new Button(
        canvas.width * 0.8,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.3,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "決定",              // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    determination_button.draw(canvas, context);

    //// 針のドラッグアンドドロップ機能 ////
    let clicked = false; // クリックされているかどうか

    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        let canvas_rectangle = canvas.getBoundingClientRect();
        // もし「決定ボタン」で左クリックされた場合, 答え合わせフェーズに移行する
        if(determination_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            canvas.removeEventListener("mousemove", mousemoveListener, false);
            canvas.removeEventListener("touchmove", touchmoveListener, false);
            canvas.removeEventListener("mouseup", mouseupListener, false);
            result(canvas, context);
            return;
        }
        // もし 操作プレイヤー変更ボタン で左クリックされた場合, 針を操作するプレイヤーを変更する
        if(change_player_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            if(current_player == num_of_player - 1){
                current_player = 1;
            }
            else{
                current_player++;
            }
        }
        // ボタンが押されてなければ, 針を移動させる
        clicked = true;
        // クリックされた時点でのマウスの場所の角度を算出
        let previous = theta[current_player - 1]; // 一つ前の角度を保存しておく
        theta[current_player - 1] = get_degree(center_of_arc_x, center_of_arc_y, event.clientX, event.clientY);
        // 決定ボタン以外で画面下半分がクリックされたら, 針は動かさない 
        if(theta[current_player - 1] > 0){
            theta[current_player - 1] = previous;
        }
        //// 各パーツの描画 ////
        // canvas のリセット
        canvas_reset(canvas, context);
        // 画面上部のテキストを表示
        draw_text_of_the_top("回答中...", canvas, context);
        // 半円形の用意
        draw_half_circle(canvas, context);
        // 針の描画
        draw_needle(theta, canvas, context);
        // お題の描画
        draw_question(questions[question_number][0], questions[question_number][1], canvas, context);
        // 操作プレイヤー変更ボタンの描画
        if(current_player == 1) text_color = "rgb(200, 0, 0)";
        if(current_player == 2) text_color = "rgb(0, 0, 200)";
        if(current_player == 3) text_color = "rgb(0, 200, 0)";
        change_player_button = new Button(
            canvas.width * 0.3,     // x座標
            canvas.height * 0.85,    // y座標
            canvas.width * 0.5,     // 横幅
            canvas.height * 0.15,   // 縦幅
            "P" + current_player,   // テキスト
            "rgb(250, 200, 200)",   // ボタンカラー
            text_color,             // テキストカラー
        );
        change_player_button.draw(canvas, context);
        // 決定ボタンの描画
        determination_button.draw(canvas, context);
    }

    canvas.addEventListener("mousemove", mousemoveListener, false);
    function mousemoveListener(event){
        event.preventDefault();
        if(clicked){
            let canvas_rectangle = canvas.getBoundingClientRect();
            // もしもし 操作プレイヤー変更ボタン でマウスがドラッグされた場合, 何もしない
            if(change_player_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
                return;
            }
            // ドラッグされた時点でのマウスの場所の角度を算出
            theta[current_player - 1] = get_degree(center_of_arc_x, center_of_arc_y, event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top);
            // 針が半円の下半分に行かないようにする
            if(theta[current_player - 1] > 90){
                theta[current_player - 1] = -180;
            }
            else if(theta[current_player - 1] > 0){
                theta[current_player - 1] = 0;
            }
            //// 各パーツの描画 ////
            // canvas のリセット
            canvas_reset(canvas, context);
            // 画面上部のテキストを表示
            draw_text_of_the_top("回答中...", canvas, context);
            // 半円形の用意
            draw_half_circle(canvas, context);
            // 針の描画
            draw_needle(theta, canvas, context);
            // お題の描画
            draw_question(questions[question_number][0], questions[question_number][1], canvas, context);
            // 操作プレイヤー変更ボタンの描画
            change_player_button.draw(canvas, context);
            // 決定ボタンの描画
            determination_button.draw(canvas, context);
        }
    }

    canvas.addEventListener("touchmove", touchmoveListener, false);
    function touchmoveListener(event){
        event.preventDefault();
        for (let i = 0; i < event.changedTouches.length; i++) {
            let canvas_rectangle = canvas.getBoundingClientRect();
            x[i] = event.changedTouches[i].pageX - (canvas_rectangle.left + window.pageXOffset);
            y[i] = event.changedTouches[i].pageY - (canvas_rectangle.top + window.pageYOffset);

            // もしもし 操作プレイヤー変更ボタン で指がドラッグされた場合, 何もしない
            if(change_player_button.clicked(x[0], y[0])){
                return;
            }
            // ドラッグされた時点での指の場所の角度を算出
            theta[current_player - 1] = get_degree(center_of_arc_x, center_of_arc_y, x[0], y[0]);
            // 針が半円の下半分に行かないようにする
            if(theta[current_player - 1] > 90){
                theta[current_player - 1] = -180;
            }
            else if(theta[current_player - 1] > 0){
                theta[current_player - 1] = 0;
            }
            //// 各パーツの描画 ////
            // canvas のリセット
            canvas_reset(canvas, context);
            // 画面上部のテキストを表示
            draw_text_of_the_top("回答中...", canvas, context);
            // 半円形の用意
            draw_half_circle(canvas, context);
            // 針の描画
            draw_needle(theta, canvas, context);
            // お題の描画
            draw_question(questions[question_number][0], questions[question_number][1], canvas, context);
            // 操作プレイヤー変更ボタンの描画
            change_player_button.draw(canvas, context);
            // 決定ボタンの描画
            determination_button.draw(canvas, context);
        }
    }

    canvas.addEventListener("mouseup", mouseupListener, false);
    function mouseupListener(event){
        event.preventDefault();
        clicked = false;
    }
}

//// 答え合わせフェーズ ////
function result(canvas, context){
    // canvas のリセット
    canvas_reset(canvas, context);

    // 半円形の用意
    draw_half_circle(canvas, context);
    // 得点ゾーンの描画
    draw_point_zone(answer_degree, canvas, context);
    // 針の描画
    draw_needle(theta, canvas, context);
    // お題の描画
    draw_question(questions[question_number][0], questions[question_number][1], canvas, context);

    // 点数の判定
    let areas = [];
    for(let i = 0; i < num_of_player - 1; i++){
        if(Math.abs(theta[i] - answer_degree) <= area_size / 2){
            areas[i] = 0;
        }
        else if(Math.abs(theta[i] - answer_degree) <= area_size / 2 * 3){
            areas[i] = 1;
        }
        else if(Math.abs(theta[i] - answer_degree) <= area_size / 2 * 5){
            areas[i] = 2;
        }
        else{
            areas[i] = 3;
        }
    }
    
    // 点数の描画
    draw_point(areas, canvas, context);

    // 「タイトルに戻る」ボタンの描画
    let go_back_to_title_button = new Button(
        canvas.width * 0.5,     // x座標
        canvas.height * 0.85,    // y座標
        canvas.width * 0.85,     // 横幅
        canvas.height * 0.15,   // 縦幅
        "タイトルに戻る",         // テキスト
        "rgb(250, 200, 200)",   // ボタンカラー
    );
    go_back_to_title_button.draw(canvas, context);

    canvas.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        // 「タイトルに戻る」ボタンがクリックされたらタイトル画面に移行する
        let canvas_rectangle = canvas.getBoundingClientRect();
        if(go_back_to_title_button.clicked(event.clientX - canvas_rectangle.left, event.clientY - canvas_rectangle.top)){
            canvas.removeEventListener("mousedown", mousedownListener, false);
            title(canvas, context);
        }
    }
}