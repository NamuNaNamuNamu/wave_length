// TODO: 今はまだロジックに絡んでいない。将来的にこの phases に依存させる (state の初期化処理など)。その仕組みができたら export する。

const PHASES = Object.freeze({
    READY: "READY",
    QUESTION: "QUESTION",
    ANSWER: "ANSWER",
    RESULT: "RESULT"
});
