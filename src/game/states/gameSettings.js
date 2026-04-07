// フェーズ関係なくアプリ起動中に保持される state 変数。
// TODO: フェーズを管理するクラスを追加したい。

export const gameSettings = {
    num_of_player: 2,   // 参加プレイヤー数
    pointZoneSize: 10,      // 1つの得点エリアのサイズ(度)
    points: [5, 3, 1]   // 各得点ゾーンの得点
}