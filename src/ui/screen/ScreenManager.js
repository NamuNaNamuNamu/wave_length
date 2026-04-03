import { canvas } from "../../core/canvas/Canvas.js";
import { eventListenerManager } from "./EventListenerManager.js";

class ScreenManager {
    constructor() {

    }

    initialize() {
        canvas.reset();
    }

    navigateTo(screen) {
        this.initialize();
        eventListenerManager.removeAllEventListener();
        screen.draw(canvas.getContext());
        screen.activate();
    }
}

export const screenManager = new ScreenManager();