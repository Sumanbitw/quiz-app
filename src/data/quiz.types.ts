export type QuizAnswers = {
    answer : string,
    isRight : boolean,
}

export type QuizType = {
    id:number,
    question : string,
    correctAnswer : number,
    wrongAnswer : number,
    answers : QuizAnswers[],
}
export type QuizDetails = {
    totalQuestions : number,
    difficulty ?: "Easy" | "Medium" | "Hard",
    totalPoints : number,
}
export type Quiz = {
    id : number,
    quizName : string,
    category : string,
    quizDetails : QuizDetails, 
    questions : QuizType[],
}
