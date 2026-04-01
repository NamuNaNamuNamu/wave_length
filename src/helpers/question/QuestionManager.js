import { questions } from "./helpers/questions.js";

export class QuestionManager {
    #questions;

    constructor() {
        this.#questions = questions;
    }

    getAll() {
        return [...this.#questions];
    }
}

export const questionManager = new QuestionManager();