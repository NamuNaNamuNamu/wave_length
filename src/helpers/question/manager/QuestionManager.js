import { questions } from "./internal/questions.js";

class QuestionManager {
    #questions;

    constructor() {
        this.#questions = questions;
    }

    getAll() {
        return [...this.#questions];
    }

    getCount() {
        return this.#questions.length;
    }

    pickRandom() {
        return this.#questions[Math.floor(Math.random() * this.getCount())];
    }
}

export const questionManager = new QuestionManager();