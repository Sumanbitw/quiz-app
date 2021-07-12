import React from 'react'
import { UseQuiz } from '../../context/quixContext'
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
// import { QuestionType } from './QuizQuestionContainer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import "./score.css"

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
    '& > *': {
        margin: theme.spacing(1),
    },
    width: "65%",
    height: "20%",
    borderRadius : "10px",
    display : "flex",
    flexDirection : "column",
    position : "relative",
    justifyContent : "center",
    alignItems : "center",
    top : "1.5rem",
    bottom : "2rem",
    margin : "0 auto",
    marginBottom : "1.5rem"
  },
}),
);


function Score({question, isSelected } : any) {
    const classes = useStyles()
    const navigate = useNavigate()
    const { state : {
        score, 
        correctAttempt, 
        inCorrectAttempt, 
        currentQuiz, 
        response, 
        category, 
        attemptedQuestion
    }, dispatch } = UseQuiz()

    

    return (
        <div className="score">
            <h1>Score : {score } / { category[0]?.quizDetails.totalPoints ? category[0]?.quizDetails.totalPoints : 0} </h1>
            <div>
                <h3>Correct Attempt : {correctAttempt}</h3>
                <h3>Incorrect Attempt : {inCorrectAttempt}</h3>
            </div>

                <h2>Submitted Response : </h2>
                {currentQuiz.map((questionObj, index) => (
                    <>
                    <div className="score__response">
                    <h3>Q.{index + 1} {questionObj.question}</h3>
                    {questionObj.incorrectOption.concat(questionObj.correctOption).sort(() => Math.random() - 0.5).map(answer => (
                        <div>
                            <Button variant="contained" className={classes.root} style={{ backgroundColor : answer === questionObj.correctOption ? "green" : answer === response[index] ? "red" : "whitesmoke"}}>{answer}</Button>
                        </div>
                    ))}
                    <h4> Explanantion : {questionObj.explanation}</h4>
                    </div>
                    </>            
                ))}

                <Button
                variant='contained'
                onClick={() => {
                    dispatch({ type : "RESET"})
                    navigate("/")
                }}
                >
                Play Again
                </Button>
        </div>
    )
}

export default Score
