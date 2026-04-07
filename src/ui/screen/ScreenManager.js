import { canvas } from "../../core/canvas/Canvas.js";
import { eventListenerManager } from "./EventListenerManager.js";

class ScreenManager {
    #currentScreen;

    constructor() {
        this.#currentScreen = null;
    }

    navigateTo(screen) {
        this.#currentScreen = screen;

        canvas.reset();
        eventListenerManager.removeAllEventListener();

        this.#currentScreen.draw(canvas.getContext());
        this.#currentScreen.activate();
    }

    reDraw() {
        canvas.reset();
        this.#currentScreen.draw(canvas.getContext());
    }
}

export const screenManager = new ScreenManager();