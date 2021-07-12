import React from 'react'
// import quizImage1 from "../assests/images/quizImage1.jpg"
import { QuizCategory } from '../data/quiz.types'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import {  Typography, Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles({
    root: {
      width: 200,
      height:200,
      backgroundColor:"#b0bec5"
    },
    button : {
        color : "white",
        padding : "0.5rem 2rem",
        margin: "2rem",
        backgroundColor : "#2e7d32",
        border : "1px solid #2e7d32",
    },
    media : {
        height : 70,
        width: 50
    }
  });

function QuizTypeCategory({ categoryItem } : { categoryItem : QuizCategory}) {
    console.log(categoryItem)
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                             {categoryItem.quizName}
                        </Typography>
                        <Chip label={categoryItem.quizDetails.difficulty} style={{ backgroundColor:"blue", marginRight:"0.5rem", color:"white" }}/>
                        <Chip label='Sports'/>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/quiz/${categoryItem._id}`} style={{ textDecoration:"none" }}>
                        <Button
                            size="small" 
                            color="primary"
                            className={classes.button}
                        >
                            Start
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default QuizTypeCategory
