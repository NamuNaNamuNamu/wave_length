import { reset } from "./canvas/reset.js";

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

    getHeight() {
        return this.#canvas.height;
    }

    reset() {
        reset(this);
    }

    resizeAdjustToWindowSize() {
        if(document.documentElement.clientWidth > document.documentElement.clientHeight){
            this.#canvas.width = document.documentElement.clientHeight * 0.95;
            this.#canvas.height = document.documentElement.clientHeight * 0.95;
        }
        else{
            this.#canvas.width = document.documentElement.clientWidth * 0.95;
            this.#canvas.height = document.documentElement.clientWidth * 0.95;
        }
    }
}

export const canvasReplaced = new Canvas(); // TODO: canvas 要素をすべて置き換えたら canvas にリネーム。