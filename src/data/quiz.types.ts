export type QuizAnswers = {
    answer : string,
    isRight : boolean,
}

export type QuizType = {
    id:number,
    question : string,
    answers : QuizAnswers[],
}
export type Quiz = {
    quizType : string,
    points : number, 
    questions : QuizType[],
}
