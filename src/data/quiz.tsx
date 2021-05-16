import { Quiz } from "./quiz.types"
const quizData : Quiz = {
    quizType : "Easy",
    points : 5,
    questions : [{
        id : 123,
        question: "Harold (“Dickie”) Bird is best known for his career in cricket as",
        answers : [
            {answer : "an admistrator", isRight: false},
            {answer : "a bowler", isRight: false},
            {answer : "a batsman", isRight: false},
            {answer : "an umpire", isRight: true}]
    },
    {
        id : 124,
        question: "For how many days a test match is scheduled",
        answers : [
            {answer : "six days", isRight: false},
            {answer : "five days", isRight: true},
            {answer : "one day", isRight: false},
            {answer : "four days", isRight: false}]
    },
    {
        id : 125,
        question: "What is the name given to the biennial international Test cricket series played between England and Australia?",
        answers : [
            {answer : "The cricket world cup", isRight: false},
            {answer : "The ashes", isRight: true},
            {answer : "Border-Gavaskar Trophy", isRight: false},
            {answer : "BBL", isRight: false}]
    }

]
}

export{quizData}