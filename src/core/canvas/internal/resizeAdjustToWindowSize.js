export function resizeAdjustToWindowSize(canvas) {
    if(document.documentElement.clientWidth > document.documentElement.clientHeight){
        canvas.setWidth(document.documentElement.clientHeight * 0.95);
        canvas.setHeight(document.documentElement.clientHeight * 0.95);
    }
    else{
        canvas.setWidth(document.documentElement.clientWidth * 0.95);
        canvas.setHeight(document.documentElement.clientWidth * 0.95);
    }
}