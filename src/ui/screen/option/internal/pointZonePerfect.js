import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZonePerfect() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン１の得点", // TODO: 名称を変更する。得点ゾーン関連の設定は親をまとめてもいいかも。
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.55
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.points.perfect,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.55
    });
}