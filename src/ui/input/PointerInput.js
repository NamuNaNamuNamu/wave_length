import { eventListenerManager } from "../eventListener/EventListenerManager.js";
import { Pointer } from "./Pointer.js";

class PointerInput {
    #isDown;

    constructor({ isDown }) {
        this.#isDown = isDown;
    }

    onPointerDown (callback) {
        const handler = (event) => {
            event.preventDefault();
            this.#isDown = true;

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            callback(new Pointer({ x, y }));
        }

        eventListenerManager.addEventListener("mousedown", handler, false);
    }

    onPointerUp (callback) {
        const handler = (event) => {
            event.preventDefault();
            this.#isDown = false;

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            callback(new Pointer({ x, y }));
        }

        eventListenerManager.addEventListener("mouseup", handler, false);
    }

    onPointerDrag (callback) {
        const mousemoveHandler = (event) => {
            event.preventDefault();

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (this.#isDown) {
                callback(new Pointer({ x, y }));
            }
        }

        const touchmoveHandler = (event) => {
            event.preventDefault();
            
            const rect = canvas.getBoundingClientRect();
            const touch = event.changedTouches[0];
            const x = touch.pageX - (rect.left + window.pageXOffset);
            const y = touch.pageY - (rect.top + window.pageYOffset);

            callback(new Pointer({ x, y }));
        }

        eventListenerManager.addEventListener("mousemove", mousemoveHandler, false);
        eventListenerManager.addEventListener("touchmove", touchmoveHandler, false);
    }
}

export const pointerInput = new PointerInput({ isDown: false });