import React, { useState } from 'react'
import "./home.css"
import { Button, Typography } from '@material-ui/core'
import '@fontsource/roboto'
import { UseQuiz } from '../../context/quixContext';
import { quizData } from "../../data/quiz"
import { makeStyles, Theme } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const userStyles = makeStyles({
        headers : {
            color : "green",
        },

        buttons : {
            color : "green",
            padding : "0.5rem 2rem",
            margin: "2rem",
            backgroundColor : "white",
            border : "1px solid green", 
        }
    
})
function Home() {
    const classes = userStyles()
  
    // const [ currentQuestion, setCurrentQuestion ] = useState<number>(0)
    // const [ score, setScore ] = useState<number>(0)
    // const [ clicked, setClicked ] = useState<boolean>(false)
    // const value = UseQuiz()
    // function handleClick(answer: any) {
    //     if(answer.isRight === true){
    //         console.log("correct")
    //         setScore(prevScore => prevScore + 1)
    //     } else {
    //         console.log("incorrect")
    //         setScore(prevScore => prevScore - 1)
    //     }
    //     setClicked(true)
    // }

    // function handleNextQuestion(){
    //     setClicked(false)
    //     if(currentQuestion < quizData.questions.length - 1)
    // {
    //     setCurrentQuestion(prevQuestion => prevQuestion + 1)
    // }
    // }
    return (
        // <div className="home">
        //     <div className="home__container">
        //     <div>
            /* <Typography variant='h3' color="textSecondary">Sports Quiz 🤯</Typography>
            <p>Status : {value?.status}</p>
            <p>Score : {score}</p>
            <div className="home__wrapper">
                <h4>{quizData.quizType}</h4>
               <div className="home__question">Q. {quizData.questions[currentQuestion].question} ?</div>
               </div>
               <div className="home__answers">{quizData.questions[currentQuestion].answers.map(answer => (
                   <li className="answer__list">
                       <button style={{ backgroundColor : clicked && answer.isRight ? "green" : "white" }} className="button" onClick={() => handleClick(answer)} disabled={clicked}>{answer.answer}</button>
                   </li>
               ))}
               </div>
               <button className="btn__next" onClick={handleNextQuestion} disabled={!clicked}>Next</button>
            </div>
            </div>
        </div> */

        <div className="home">
            <Typography 
                variant='h3' 
                align='center'
            >
                Quiz
            <Typography 
                display='inline' 
                variant='h3' 
                className={classes.headers}
            >
                zing
            </Typography> is a platform where you can test your knowledge in cricket. 
            </Typography>

            <Button
                type='submit'
                variant='outlined'
                className={classes.buttons}
                endIcon={<IconButton><ArrowForwardIcon style={{color:'green'}}/></IconButton>}
            >
                Explore 
            </Button>
        </div>
    )
}

export default Home
