// TODO: Button.js の ImageButton は後々これで置き換える。置き換えたら ImageButton にリネーム。

import { wScale, hScale } from "../../../core/canvas/utils/scale.js";
import { screenManager } from "../../screen/ScreenManager.js";
import { isClicked } from "./internal/isClicked.js";

export class ImageButtonReplaced {
    #posX;
    #posY;
    #width;
    #height;
    #image;
    #onClick;

    constructor ({ posX, posY, width, height, imageURL, onClick }) {
        this.#posX = posX;
        this.#posY = posY;
        this.#width = width;
        this.#height = height;
        this.#image = this.#load(imageURL);
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

    #load (imageURL) {
        let image = new Image();
        image.src = imageURL;
        return image;
    }

    #isImageLoaded () {
        return this.#image.complete && this.#image.naturalWidth !== 0;
    }

    draw (context) {
        const drawImage = (context) => {
            context.drawImage(
                this.#image,
                wScale(this.#posX - this.#width * 0.5),
                hScale(this.#posY - this.#height * 0.5),
                wScale(this.#width),
                hScale(this.#height)
            );
        }

        if (this.#isImageLoaded()) {
            drawImage(context);
            return;
        }

        this.#image.onload = () => {
            screenManager.reDraw();
        }
    }

    #isClicked (x, y) {
        return isClicked(this, x, y);
    }
    
    receiveClick (x, y) {
        if(this.#isClicked(x, y)) { this.#onClick(); }
    }
}