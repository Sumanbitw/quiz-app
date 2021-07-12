import React  from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from 'react'
// import { quizzes } from '../../data/database'
// import { Quiz } from '../../data/quiz.types'
// import QuizInstruction from './QuizInstruction'
// import QuizQuestionContainer from './QuizQuestionContainer'
import { UseQuiz } from '../../context/quixContext'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import "./quizQuestion.css"
// import { QuestionType } from '../../data/quiz.types'
// import axios from 'axios'
// import { Quiz } from '../../data/quiz.types'
// import { displayPartsToString } from 'typescript';

export type QuizQuestionType = {
    setShowQuestions : (flag : boolean) => void
}

// export type QuizQuestionsType = {
//     currentQuestions : QuestionType,
// }
        const useStyles = makeStyles((theme: Theme) =>
            createStyles({
                root: {
                '& > *': {
                    margin: theme.spacing(1),
                },
                width: "90%",
                display : "flex",
                flexDirection : "column",
                position : "relative",
                justifyContent : "center",
                alignItems : "center",
                top : "1.5rem",
                bottom : "2rem",
                margin : "0 auto",
                marginBottom : "1rem"
              },
              question : {
                  margin : "1.5rem 2rem", 
                  padding : "0.5rem",
                //   fontSize : "18px",
                width : "80%"
              },
              primary : {
                backgroundColor: '#cfe8fc',
                height: '20vh'
              },
              secondary : {
                backgroundColor: 'teal',
                height: '50vh'
              }
            }),
        );

function QuizQuestion() {
    const classes = useStyles();
    const { state : { currentQuestionNumber, currentQuiz, correctAttempt, inCorrectAttempt,response, category }, dispatch } = UseQuiz() 
    const navigate = useNavigate()
    const { id } = useParams()

    console.log(currentQuiz[currentQuestionNumber], correctAttempt, inCorrectAttempt, response)


    const optionHandler = (option : string, answer : string) => {
        dispatch({ type : "SELECT__ANSWER", payload : { option : option , answer : answer}})
        if(currentQuiz.length >= currentQuestionNumber + 1) {
            dispatch({ type : "INCREASE__QUESTION__NUMBER" })
        }else {
            navigate("/score")
        }
      
    }

    const handleScore = () => {
        dispatch({ type : "TOTAL__SCORE", payload : category[0].quizDetails.totalPoints/category[0].quizDetails.totalQuestions})
        navigate("/score")
    }
    const options = currentQuiz[currentQuestionNumber] && currentQuiz[currentQuestionNumber].incorrectOption.concat(currentQuiz[currentQuestionNumber].correctOption).sort(() => Math.random() - 0.5)

    useEffect(() => {
        dispatch({ type:"INITIALISE__CURRENT__QUIZ", payload: { quizId : id }})
        return () => {}
    },[])

    return (
        <div className="quiz__questions" style={{ backgroundColor: "#263238" }}>
            {currentQuiz[currentQuestionNumber] && currentQuestionNumber  !== currentQuiz.length 
            ? (
            <Container maxWidth="sm">
                <Typography component="div" className={classes.primary}>
                    <Typography component="h5" className={classes.question}>Q.{currentQuestionNumber + 1 } {currentQuiz[currentQuestionNumber] && currentQuiz[currentQuestionNumber].question}</Typography>
                </Typography>
                <Typography component="div" className={classes.secondary} >
                    {currentQuiz[currentQuestionNumber] && options.map(optionBtn => (
                        <Button className={classes.root} variant='outlined' onClick={() => optionHandler(optionBtn, currentQuiz[currentQuestionNumber].correctOption)}>{optionBtn}</Button>
                    ))}
                </Typography>
            </Container> 
            )
            : <Button variant="contained" onClick={handleScore}>Check Score</Button>
        }
        </div>
    )
}

export default QuizQuestion
