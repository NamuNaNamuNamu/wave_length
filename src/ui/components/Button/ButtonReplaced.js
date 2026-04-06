// TODO: Button.js は後々これで置き換える。置き換えたら Button にリネーム。

import { hScale, wScale } from "../../../core/canvas/utils/scale.js";
import { isClicked } from "./internal/isClicked.js";

export class ButtonReplaced {
    #posX
    #posY
    #width
    #height
    #text
    #textColor
    #buttonColor
    #onClick

    constructor ({ posX, posY, width, height, text, textColor, buttonColor, onClick }) {
        this.#posX = posX;
        this.#posY = posY;
        this.#width = width;
        this.#height = height;
        this.#text = text ?? "名称未設定";
        this.#textColor = textColor ?? "rgb(0, 0, 0)";
        this.#buttonColor = buttonColor ?? "rgb(250, 200, 200)";
        this.#onClick = onClick ?? (() => {});
    }

    getPosX () {
        return this.#posX;
    }

    getPosY () {
        return this.#posY;
    }

    getWidth () {
        return this.#width;
    }

    getHeight () {
        return this.#height;
    }

    draw(context) {
        context.fillStyle = this.#buttonColor;
        context.fillRect(wScale(this.#posX - this.#width * 0.5), hScale(this.#posY - this.#height * 0.5), wScale(this.#width), hScale(this.#height));

        context.font = hScale(this.#height * 0.8) + "px serif";
        context.fillStyle = this.#textColor;
        context.textAlign = "center";
        context.fillText(this.#text, wScale(this.#posX), hScale(this.#posY + this.#height * 0.3));
    }

    isClicked(x, y) {
        return isClicked(this, x, y);
    }

    receiveClick(x, y) {
        if(this.isClicked(x, y)) { this.#onClick(); }
    }
}