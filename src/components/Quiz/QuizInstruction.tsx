import React from 'react'
// import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
// import { UseQuiz } from '../../context/quixContext'
// import { quizzes } from "../../data/database"
// import { Quiz } from '../../data/quiz.types'
// import QuizCard from "./QuizCard"
import List from '@material-ui/core/List'
import StarHalfIcon from '@material-ui/icons/StarHalf';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { QuizQuestionType } from "./QuizQuestion"
import { makeStyles } from "@material-ui/core/styles";
import "./quiz.css"

const useStyles = makeStyles({
    textColor : {
        color:"whitesmoke",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        width: "80%",
    },
    button : {
        color : "white",
        padding : "0.5rem 2rem",
        margin : "2rem",
        backgroundColor : "#2e7d32",
        border : "1px solid #2e7d32",
    },
    root : {
        fontSize : "30px",
        color : "whitesmoke",
        borderBottom : "1px solid grey"
    }
})


function QuizInstruction({ setShowQuestions } : QuizQuestionType){
    // const value = UseQuiz()
    const classes = useStyles()
    return (
        <div className="quiz__instruction">
            <List style={{
                display:"flex",
                flexDirection:"column",
                gap:"0.75rem", 
                justifyContent:"center",
                alignItems:"center"
                }}
            >
                <Typography className={classes.root}>Instructions</Typography>
                <ListItemIcon className={classes.textColor}>
                    <StarHalfIcon/>
                    <Typography>
                        In this set there are 5 questions.
                    </Typography>
                </ListItemIcon>

                <ListItemIcon className={classes.textColor}>
                    <StarHalfIcon/>
                    <Typography>
                        Each correct answer gives 10 points.
                    </Typography>
                </ListItemIcon>

                <ListItemIcon className={classes.textColor}>
                    <StarHalfIcon/>
                    <Typography>
                        Each wrong answer has negative -2 points.
                    </Typography>
                </ListItemIcon>

                <ListItemIcon className={classes.textColor}>
                    <StarHalfIcon/>
                    <Typography>
                        Total time for this section is 2:30 minutes.
                    </Typography>
                </ListItemIcon>
            </List>
            <Button 
                type="submit"
                variant='outlined'
                className={classes.button}
                onClick={() => setShowQuestions(true)}   
            >
                Start Quiz
            </Button>
        </div>
    )
}

export default QuizInstruction
