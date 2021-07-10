// import { Quiz } from "./quiz.types";
// import { quizOne } from "./quiz1";
// import { quizTwo } from "./quiz2";
// import { quizThree } from "./quiz3";

// export const quizzes : Quiz[] = [ quizOne, quizTwo, quizThree ]

// export const quizzes : Quiz [] = [
//     {
//         id:"1",
//         quizName : "Quiz Set 1",
//         quizDetails : {
//             totalQuestions : 5,
//             totalPoints : 50,
//             difficulty : "Easy",
//             totalTime : "2.30 minutes",
//         },
//         questions : [
//         {
//             id : "11",
//             question : "Harold (“Dickie”) Bird is best known for his career in cricket as",
//             correctAnswer : 10,
//             negativePoints : 2,
//             answers : [
//             {id:"1", answer : "an admistrator", isRight: false},
//             {id:"2", answer : "a bowler", isRight: false},
//             {id:"3", answer : "a batsman", isRight: false},
//             {id:"4", answer : "an umpire", isRight: true}
//             ]
//         },
//         {
//             id:"12",
//             question: "What is the name given to the biennial international Test cricket series played between England and Australia?",
//             correctAnswer : 10,
//             negativePoints : 2,
//             answers :[
//                 {id:"1", answer : "The cricket world cup", isRight: false},
//                 {id:"2", answer : "The ashes", isRight: true},
//                 {id:"3", answer : "Border-Gavaskar Trophy", isRight: false},
//                 {id:"4", answer : "BBL", isRight: false}
//             ]
//         },
//         {
//             id:"13",
//             question : "In which year were the first laws of cricket believed to have been written?",
//             correctAnswer : 10,
//             negativePoints : 2,
//             answers : [
//                 {id:"1", answer : "1774" , isRight : true},
//                 {id:"2", answer : "1882" , isRight : false},
//                 {id:"3", answer : "1790" , isRight : false},
//                 {id:"4", answer : "1888" , isRight : false}
//         ]
//         },
//         {
//                 id:"14",
//                 question : "What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?",
//                 correctAnswer : 10,
//                 negativePoints : -2,
//                 answers : [
//                     {id:"1", answer : "an over" , isRight : false},
//                     {id:"2", answer : "half volley" , isRight : false},
//                     {id:"3", answer : "jaffa" , isRight : true},
//                     {id:"4", answer : "an inswinger" , isRight : false}
//                 ]
//         },
//         {
//             id:"15",
//             question : "What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?",
//             correctAnswer : 10,
//             negativePoints : -2,
//             answers : [
//                 {id:"1", answer : "an over" , isRight : false},
//                 {id:"2", answer : "half volley" , isRight : false},
//                 {id:"3", answer : "jaffa" , isRight : true},
//                 {id:"4", answer : "an inswinger" , isRight : false}
//             ]
//         }
//         ]
//     },
//     {
//         id: "2",
//         quizName : "Quiz Set 2",
//         quizDetails : {
//             totalQuestions : 5,
//             totalPoints : 50,
//             difficulty : "Medium",
//             totalTime : "2.30 minutes", 
//         },
//         questions : [
//             {
//                 id: "11",
//                 question : "Harold (“Dickie”) Bird is best known for his career in cricket as ? ",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "an admistrator", isRight: false},
//                     {id:"2", answer : "a bowler", isRight: false},
//                     {id:"3", answer : "a batsman", isRight: false},
//                     {id:"4", answer : "an umpire", isRight: true}
//                 ]
//             },
//             {
//                  id:"12",
//                 question: "What is the name given to the biennial international Test cricket series played between England and Australia?",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers :[
//                     {id:"1", answer : "The cricket world cup", isRight: false},
//                     {id:"2", answer : "The ashes", isRight: true},
//                     {id:"3", answer : "Border-Gavaskar Trophy", isRight: false},
//                     {id:"4", answer : "BBL", isRight: false}
//                 ]
//             },
//             {
//                 id:"13",
//                 question : "In which year were the first laws of cricket believed to have been written?",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "1774" , isRight : true},
//                     {id:"2", answer : "1882" , isRight : false},
//                     {id:"3", answer : "1790" , isRight : false},
//                     {id:"4", answer : "1888" , isRight : false}
//                 ]
//             },
//             {
//                 id:"14",
//                 question : "What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "an over" , isRight : false},
//                     {id:"2", answer : "half volley" , isRight : false},
//                     {id:"3", answer : "jaffa" , isRight : true},
//                     {id:"4", answer : "an inswinger" , isRight : false}
//                 ]   
//             },
//             {
//                 id : "15",
//                 question: "For how many days a test match is scheduled",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "six days", isRight: false},
//                     {id:"2", answer : "five days", isRight: true},
//                     {id:"3", answer : "one day", isRight: false},
//                     {id:"4", answer : "four days", isRight: false}
//             ]
//             }
//         ]
//     },
//     {
//         id: "3",
//         quizName : "Quiz Set 2",
//         quizDetails : {
//             totalQuestions : 5,
//             totalPoints : 50,
//             difficulty : "Medium",
//             totalTime : "2.30 minutes", 
//         },
//         questions : [
//             {
//                 id: "11",
//                 question : "Harold (“Dickie”) Bird is best known for his career in cricket as ? !",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "an admistrator", isRight: false},
//                     {id:"2", answer : "a bowler", isRight: false},
//                     {id:"3", answer : "a batsman", isRight: false},
//                     {id:"4", answer : "an umpire", isRight: true}
//                 ]
//             },
//             {
//                  id:"12",
//                 question: "What is the name given to the biennial international Test cricket series played between England and Australia?",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers :[
//                     {id:"1", answer : "The cricket world cup", isRight: false},
//                     {id:"2", answer : "The ashes", isRight: true},
//                     {id:"3", answer : "Border-Gavaskar Trophy", isRight: false},
//                     {id:"4", answer : "BBL", isRight: false}
//                 ]
//             },
//             {
//                 id:"13",
//                 question : "In which year were the first laws of cricket believed to have been written?",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "1774" , isRight : true},
//                     {id:"2", answer : "1882" , isRight : false},
//                     {id:"3", answer : "1790" , isRight : false},
//                     {id:"4", answer : "1888" , isRight : false}
//                 ]
//             },
//             {
//                 id:"14",
//                 question : "What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "an over" , isRight : false},
//                     {id:"2", answer : "half volley" , isRight : false},
//                     {id:"3", answer : "jaffa" , isRight : true},
//                     {id:"4", answer : "an inswinger" , isRight : false}
//                 ]   
//             },
//             {
//                 id : "15",
//                 question: "For how many days a test match is scheduled",
//                 correctAnswer : 10,
//                 negativePoints : 2,
//                 answers : [
//                     {id:"1", answer : "six days", isRight: false},
//                     {id:"2", answer : "five days", isRight: true},
//                     {id:"3", answer : "one day", isRight: false},
//                     {id:"4", answer : "four days", isRight: false}
//             ]
//             }
//         ]
//     }
// ]

import React from 'react'

function database() {
    return (
        <div>
            
        </div>
    )
}

export default database
