import { reset } from "./helpers/reset.js";
import { resizeAdjustToWindowSize } from "./helpers/resizeAdjustToWindowSize.js";

class Canvas {
    #canvas;

    constructor() {
        this.#canvas = document.getElementById("canvas");
    }

    getContext() {
        return this.#canvas.getContext("2d");
    }

    getWidth() {
        return this.#canvas.width;
    }

    setWidth(width) {
        this.#canvas.width = width;
    }

    getHeight() {
        return this.#canvas.height;
    }

    setHeight(height) {
        this.#canvas.height = height;
    }

    addEventListener(...args) {
        this.#canvas.addEventListener(...args);
    }

    removeEventListener(...args) {
        this.#canvas.removeEventListener(...args);
    }

    getBoundingClientRect(...args) {
        return this.#canvas.getBoundingClientRect(...args);
    }


    reset() {
        reset(this);
    }

    resizeAdjustToWindowSize() {
        resizeAdjustToWindowSize(this);
    }
}

export const canvas = new Canvas(); // TODO: canvas 要素をすべて置き換えたら canvas にリネーム。