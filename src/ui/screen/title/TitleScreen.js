import { optionButton } from "./components/optionButton.js";
import { startButton } from "./components/startButton.js";
import { enableButtonTitle } from "./internal/enableButtonTitle.js";

class TitleScreen {
    constructor() {

    }

    draw(context) {
        startButton.draw(context);
        optionButton.draw(context);
    }

    activate() {
        enableButtonTitle(startButton, optionButton);
    }
}

export const titleScreen = new TitleScreen();