//////////////
// main関数 //
/////////////

//// お題 ////
const questions = [
    //// もともとウェーブレングスにあるお題 ////
    // あ行
    ["熱い", "冷たい"],
    ["一発屋", "ヒットメーカー"],
    ["違法", "合法"],
    ["おにぎりの具に不向き", "おにぎりの具に向いている"],
    // か行
    ["過小評価", "過大評価"],
    ["過小評価されているゲーム", "過大評価されているゲーム"],
    ["簡単な字", "難しい字"],
    ["緊急時に役に立たない", "緊急時に役に立つ"],
    ["子供向け", "大人向け"],
    // さ行
    ["静かな場所", "騒がしい場所"],
    ["時代遅れ", "流行"],
    ["失敗作", "傑作"],
    ["地味", "派手"],
    ["好き", "嫌い"],
    ["すぐ殺せる", "なかなか殺せない"],
    // た行
    ["ダメなピザのトッピング", "良いピザのトッピング"],
    ["つまらない話題", "おもしろい話題"],
    // な行
    // は行
    ["背徳の喜び", "本当に悪いこと"],
    ["不安定", "安定"],
    ["文化系", "体育会系"],
    ["普通のあいさつ", "変なあいさつ"],
    // ま行
    ["不味い", "おいしい"],
    ["無害", "有害"],
    ["難しいこと", "易しいこと"],
    ["無力", "力強い"],
    // や行
    ["許されない", "許される"],
    ["弱い", "強い"],
    // ら行
    // わ行
    ["悪い超能力", "良い超能力"],
    ["忘れやすい", "忘れにくい"],

    //// オリジナルお題 ////
    // あ行
    ["争いを生みそうな話題", "平和な話題"],
    ["親にばれてもいい趣味", "親にばれたらやばい趣味"],
    ["思わず逃げたくなっちゃうミス", "素直に謝れるミス"],
    // か行
    ["快", "不快"],
    ["固い", "柔らかい"],
    ["暗い出来事", "明るい出来事"],
    ["現実的", "非現実的"],
    ["高価", "安価"],
    ["こんな人と友達になりたい", "こんな人とは距離を置く"],
    // さ行
    ["最高な出来事", "最悪な出来事"],
    ["失敗", "成功"],
    ["絶望的な状況", "希望いっぱいの状況"],
    // た行
    ["チャンスな状況", "ピンチな状況"],
    // な行
    ["苦い", "甘い"],
    // は行
    ["バカな行動", "天才的行動"],
    // ま行
    ["貰って嬉しい", "貰ったら困る"],
    // や行
    ["許せること", "許せないこと"],
    // ら行

    // わ行

];

// 半円の中心の x, y 座標
let center_of_arc_x;
let center_of_arc_y;
// 半円の半径
let radius;

function main(){
    //// CANVASの用意 ////
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    // ウィンドウに合わせてゲーム画面の大きさ合わせ
    if(document.documentElement.clientWidth > document.documentElement.clientHeight){
        canvas.width = document.documentElement.clientHeight * 0.95;
        canvas.height = document.documentElement.clientHeight * 0.95;
    }
    else{
        canvas.width = document.documentElement.clientWidth * 0.95;
        canvas.height = document.documentElement.clientWidth * 0.95;
    }

    // 半円の中心の x, y 座標
    center_of_arc_x = canvas.width * 0.5;
    center_of_arc_y = canvas.height * 0.6;
    // 半円の半径
    radius = canvas.width * 0.45;

    //// タイトル画面を表示 ////
    title(canvas, context);
}


// メイン関数実行
main();