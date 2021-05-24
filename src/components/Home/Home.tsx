import React from 'react'
import "./home.css"
import { Button, Typography } from '@material-ui/core'
import '@fontsource/roboto'
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Link } from "react-router-dom"
// import { ThemeProvider } from '../../context/themeContext';

const userStyles = makeStyles({
        headers : {
            color : "#2e7d32",
        },

        buttons : {
            color : "white",
            padding : "0.5rem 2rem",
            margin: "2rem",
            backgroundColor : "#2e7d32",
            border : "1px solid #2e7d32",
        }, 
        
        textWidth : {
            width : "80%",
        }
})
function Home() {
    const classes = userStyles()

    return (
        <div className="home">
            <Typography 
                variant='h3' 
                align='center'
                className={classes.textWidth}
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

            <Link to="/quiz" style={{ textDecoration:"none" }}>
            <Button
                type='submit'
                variant='outlined'
                className={classes.buttons}
                endIcon={
                <IconButton>
                    <ArrowForwardIcon style={{ color:'white' }}/>
                </IconButton>}
            >
                Explore 
            </Button>
            </Link>
        </div>
    )
}

export default Home
