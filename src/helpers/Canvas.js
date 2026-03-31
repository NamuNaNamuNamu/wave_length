class Canvas {
    #canvas;

    constructor() {
        this.#canvas = document.getElementById("canvas");
    }

    getContext() {
        this.#canvas.getContext("2d");
    }
}

export const canvasReplaced = new Canvas(); // TODO: canvas 要素をすべて置き換えたら canvas にリネーム。