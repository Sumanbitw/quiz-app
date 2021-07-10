export type QuizDetails = {
    totalQuestions : number,
    totalPoints : number,
    difficulty ?: "Easy" | "Medium" | "Hard",
    totalTime : string,
}
export type Quiz = {
    _id : string,
    correctOption : string,
    categoryId : string,
    question : string,
    explanation : string,
    incorrectOption : Array<string>
}

export type QuizCategory = {
    _id : string,
    quizName : string,
    imageURL : string,
    quizDetails : QuizDetails
}