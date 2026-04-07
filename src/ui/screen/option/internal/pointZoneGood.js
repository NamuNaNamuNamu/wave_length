import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButton } from "../../../components/Button/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZoneGood() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン３の得点", // TODO: 名称を変更する。得点ゾーン関連の設定は親をまとめてもいいかも。
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.75
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.points.good,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.75
    });
}