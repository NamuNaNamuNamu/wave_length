import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function pointZoneSize() {
    textRenderer.drawGameSetting({
        context: canvas.getContext(),
        text: "得点ゾーン１つの大きさ(度)",
        pos_x: canvas.getWidth() * 0.03,
        pos_y: canvas.getWidth() * 0.27
    });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.pointZoneSize,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.37
    });
}