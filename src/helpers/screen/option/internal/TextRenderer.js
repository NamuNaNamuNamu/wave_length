import { canvas } from "../../../../core/canvas/Canvas.js";


class TextRenderer {

    constructor() {

    }

    drawGameSetting({ context, text, pos_x, pos_y }) {
        context.fillStyle = "rgb(0, 0, 0)";
        context.textAlign = "left";
        context.font = canvas.getHeight() * 0.05 + "px serif";
        context.fillText(text, pos_x, pos_y);
    }

    drawGameSettingValue({ context, value, pos_x, pos_y }) {
        context.fillStyle = "rgb(0, 0, 0)";
        context.textAlign = "center";
        context.font = canvas.getHeight() * 0.05 + "px serif";
        context.fillText(value, pos_x, pos_y);
    }
}

export const textRenderer = new TextRenderer();