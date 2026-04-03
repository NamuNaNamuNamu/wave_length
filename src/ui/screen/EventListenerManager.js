import { canvas } from "../../core/canvas/Canvas.js";

class EventListenerManager {
    #listeners;
    
    constructor() {
        this.#listeners = [];
    }

    addEventListener(type, handler, options) {
        this.#listeners.push({type, handler, options});
        canvas.addEventListener(type, handler, options);
    }

    removeAllEventListener() {
        for(let listener of this.#listeners) {
            canvas.removeEventListener(listener.type, listener.handler, listener.options);
        }
    }
}

export const eventListenerManager = new EventListenerManager();