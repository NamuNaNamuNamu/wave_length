import { eventListenerManager } from "../eventListener/EventListenerManager.js";
import { Pointer } from "./Pointer.js";

class PointerInput {
    constructor() {

    }

    onPointerDown (callback) {
        const handler = (event) => {
            event.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            callback(new Pointer(x, y));
        }

        eventListenerManager.addEventListener("mousedown", handler, false);
    }
}

export const pointerInput = new PointerInput();