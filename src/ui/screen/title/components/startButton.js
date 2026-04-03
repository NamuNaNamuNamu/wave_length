import { ButtonReplaced } from "../../../components/ButtonReplaced.js";
import { ready } from "../../ready/ready.js";

export const startButton = new ButtonReplaced({
    posX: 0.5,
    posY: 0.3,
    width: 0.6,
    height: 0.15,
    text: "スタート",
    onClick: ready
});