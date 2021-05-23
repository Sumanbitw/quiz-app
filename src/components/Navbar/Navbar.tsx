import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Menu from "@material-ui/icons/Menu"
import "./navbar.css"

const userStyles = makeStyles ({
    headers : {
        backgroundColor : 'transparent',
        color : "black",
    }
})

function Navbar() {
    const classes = userStyles()
    return (
        <div className="navbar">
            <AppBar className={classes.headers} position="fixed" >
                <Toolbar style={{display:"flex",justifyContent : "space-between"}}>
                    <IconButton>
                        <Menu />
                    </IconButton>
                    <Typography variant="h4">Quiz<span style={{color:"green"}}>zing</span></Typography>
                    <Brightness4Icon/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
