import { canvas } from "./Canvas.js";

export class Button{
    constructor(x, y, width, height, text, button_color, text_color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.button_color = button_color;
        // 7つ目の引数(テキストカラー)はあってもなくてもよし
        if(typeof text_color == "undefined") this.text_color = "rgb(0, 0, 0)";
        else this.text_color = text_color;
    }

    draw(){
        let context = canvas.getContext();
        context.fillStyle = this.button_color;
        context.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);

        context.font = this.height * 0.8 + "px serif";
        context.fillStyle = this.text_color;
        context.textAlign = "center";
        context.fillText(this.text, this.x, this.y + this.height * 0.3);
    }

    clicked(mouse_x, mouse_y){
        if(mouse_x >= this.x - this.width * 0.5 && mouse_x <= this.x + this.width * 0.5){
            if(mouse_y >= this.y - this.height * 0.5 && mouse_y <= this.y + this.height * 0.5){
                return true;
            }
        }
        return false;
    }
}

export class ImageButton extends Button{
    constructor(x, y, width, height, img){
        super(x, y, width, height, "", "");
        this.img = img;
    }

    draw(){
        canvas.getContext().drawImage(
            this.img,
            this.x - this.width * 0.5,
            this.y - this.height * 0.5,
            this.width,
            this.height
        )
    }
}