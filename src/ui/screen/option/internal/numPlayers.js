import { textRenderer } from "./TextRenderer.js";
import { gameSettings } from "../../../../game/states/gameSettings.js";
import { ImageButton } from "../../../components/Button/Button.js";
import { canvas } from "../../../../core/canvas/Canvas.js";

export function numPlayers() {
    textRenderer.drawGameSetting({
            context: canvas.getContext(),
            text: "プレイヤー数",
            pos_x: canvas.getWidth() * 0.03,
            pos_y: canvas.getWidth() * 0.1
        });
    textRenderer.drawGameSettingValue({
        context: canvas.getContext(),
        value: gameSettings.num_of_player,
        pos_x: canvas.getWidth() * 0.7,
        pos_y: canvas.getWidth() * 0.1
    });
}