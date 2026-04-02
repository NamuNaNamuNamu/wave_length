import { questions } from "./internal/questions.js";

class QuestionPicker {
    #questions;

    constructor() {
        this.#questions = questions;
    }

    #getCount() {
        return this.#questions.length;
    }

    pickRandom() {
        return this.#questions[Math.floor(Math.random() * this.#getCount())];
    }
}

export const questionPicker = new QuestionPicker();