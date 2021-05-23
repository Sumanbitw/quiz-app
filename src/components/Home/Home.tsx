import React from 'react'
import "./home.css"
import { Button, Typography } from '@material-ui/core'
import '@fontsource/roboto'
// import { UseQuiz } from '../../context/quixContext';
// import { quizOne } from "../../data/quiz1"
import { makeStyles } from "@material-ui/core/styles";
// import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Link } from "react-router-dom"

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

    return (
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

            <Link to="/quiz">
            <Button
                type='submit'
                variant='outlined'
                className={classes.buttons}
                endIcon={<IconButton><ArrowForwardIcon style={{color:'green'}}/></IconButton>}
            >
                Explore 
            </Button>
            </Link>
        </div>
    )
}

export default Home
