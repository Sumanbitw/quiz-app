import { Quiz } from "./quiz.types"
const quizData : Quiz = {
    id : 11,
    quizName : "Cricket Quiz One",
    quizDetails : { 
        totalQuestions : 5,
        difficulty : "Easy",
        totalPoints : 50,
    },
    questions : [{
        id : 123,
        question: "Harold (“Dickie”) Bird is best known for his career in cricket as",
        correctAnswer : 10,
        wrongAnswer : -2,
        answers : [
            {answer : "an admistrator", isRight: false},
            {answer : "a bowler", isRight: false},
            {answer : "a batsman", isRight: false},
            {answer : "an umpire", isRight: true}]
    },
    {
        id : 124,
        question: "For how many days a test match is scheduled",
        correctAnswer : 10,
        wrongAnswer : -2,
        answers : [
            {answer : "six days", isRight: false},
            {answer : "five days", isRight: true},
            {answer : "one day", isRight: false},
            {answer : "four days", isRight: false}]
    },
    {
        id : 125,
        question: "What is the name given to the biennial international Test cricket series played between England and Australia?",
        correctAnswer : 10,
        wrongAnswer : -2,
        answers :[
            {answer : "The cricket world cup", isRight: false},
            {answer : "The ashes", isRight: true},
            {answer : "Border-Gavaskar Trophy", isRight: false},
            {answer : "BBL", isRight: false}]
    },
    {
        id: 126,
        question : "In which year were the first laws of cricket believed to have been written?",
        correctAnswer : 10,
        wrongAnswer : -2,
        answers : [
            {answer : "1774" , isRight : true},
            {answer : "1882" , isRight : false},
            {answer : "1790" , isRight : false},
            {answer : "1888" , isRight : false}]
    },
    {
            id: 126,
            question : "What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?",
            correctAnswer : 10,
            wrongAnswer : -2,
            answers : [
                {answer : "an over" , isRight : false},
                {answer : "half volley" , isRight : false},
                {answer : "jaffa" , isRight : true},
                {answer : "an inswinger" , isRight : false}]
    }
],
}

export{quizData}