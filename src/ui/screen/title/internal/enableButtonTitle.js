import { canvas } from "../../../../core/canvas/Canvas.js";
import { eventListenerManager } from "../../EventListenerManager.js";

export function enableButtonTitle(buttons) {
    eventListenerManager.addEventListener("mousedown", mousedownListener, false);
    function mousedownListener(event){
        event.preventDefault();
        const posX = event.clientX - canvas.getBoundingClientRect().left;
        const posY = event.clientY - canvas.getBoundingClientRect().top;
        
        for(let button of buttons) {
            button.receiveClick(posX, posY);
        }
    }
}