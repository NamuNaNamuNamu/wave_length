// TODO: Button.js は後々これで置き換える。置き換えたら Button にリネーム。

import { canvas } from "../../core/canvas/Canvas.js";

export class ButtonReplaced {
    #posX
    #posY
    #width
    #height
    #text
    #textColor
    #buttonColor

    constructor ({ posX, posY, width, height, text, textColor, buttonColor }) {
        this.#posX = posX;
        this.#posY = posY;
        this.#width = width;
        this.#height = height;
        this.#text = text ?? "名称未設定";
        this.#textColor = textColor ?? "rgb(0, 0, 0)";
        this.#buttonColor = buttonColor ?? "rgb(250, 200, 200)";
    }

    draw(context) {
        context.fillStyle = this.#buttonColor;
        context.fillRect(wScale(this.#posX - this.#width * 0.5), hScale(this.#posY - this.#height * 0.5), wScale(this.#width), hScale(this.#height));

        context.font = hScale(this.#height * 0.8) + "px serif";
        context.fillStyle = this.#textColor;
        context.textAlign = "center";
        context.fillText(this.#text, wScale(this.#posX), hScale(this.#posY + this.#height * 0.3));
    }

    isClicked(x, y){
        const isOverlappingX = x >= this.#posX - wScale(this.#width * 0.5) && x <= wScale(this.#posX + this.#width * 0.5);
        const isOverlappingY = y >= hScale(this.#posY - this.#height * 0.5) && y <= hScale(this.#posY + this.#height * 0.5);

        return isOverlappingX && isOverlappingY;
    }
}

function wScale(width) {
    return width * canvas.getWidth();
}

function hScale(height) {
    return height * canvas.getHeight();
}