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
    difficulty : string,
    totalPoints : number,
}
export type Quiz = {
    id : number,
    quizName : string,
    quizDetails : QuizDetails, 
    questions : QuizType[],
}
