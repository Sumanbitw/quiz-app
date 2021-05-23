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

function QuizInstruction({ setShowQuestions } : QuizQuestionType ) {
    // const value = UseQuiz()
    return (
        <div style={{marginTop:"5rem"}}>
            <List style={{
                display:"flex",
                flexDirection:"column",
                gap:"0.75rem", 
                justifyContent:"center",
                alignItems:"center"
                }}
            >
                <ListItemIcon>
                    <StarHalfIcon/>
                    <Typography>In this set there are 5 questions.</Typography>
                </ListItemIcon>

                <ListItemIcon>
                    <StarHalfIcon/>
                    <Typography>Each correct answer gives 10 points and wrong answers reduces points by 2.</Typography>
                </ListItemIcon>

                <ListItemIcon>
                    <StarHalfIcon/>
                    <Typography>Total time for this section is 2:30 minutes.</Typography>
                </ListItemIcon>
            </List>
            <Button 
                type="submit"
                variant='outlined'
                onClick={() => setShowQuestions(true)}   
            >
                Start Quiz
            </Button>
        </div>
    )
}

export default QuizInstruction
