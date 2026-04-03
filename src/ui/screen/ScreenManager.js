import { canvas } from "../../core/canvas/Canvas.js";

class ScreenManager {
    constructor() {

    }

    initialize() {
        canvas.reset();
    }

    navigateTo(screen) {
        this.initialize();
        screen.draw(canvas.getContext());
        screen.activate();
    }
}

export const screenManager = new ScreenManager();