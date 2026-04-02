import { canvas } from "../../canvas/Canvas.js";

class TextRenderer {

    constructor() {

    }

    draw_on_the_top(context, text){
        context.fillStyle = "rgb(200, 0, 0)";
        context.textAlign = "left";
        context.font = canvas.getHeight() * 0.05 + "px serif";
        context.fillText(text, canvas.getWidth() * 0.01, canvas.getWidth() * 0.06);
    }
}

export const textRenderer = new TextRenderer();