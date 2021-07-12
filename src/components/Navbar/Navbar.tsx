import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import "./navbar.css"
import { createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    headers : { 
        backgroundColor : '#263238',
        color : "white",
    }
  }),
);
function Navbar() {
    const classes = useStyles()
    return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.headers}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h4" className={classes.title}>
            Quiz<span style={{color:"#2e7d32"}}>zing</span>
          </Typography>
          
          <Typography color="inherit" className={classes.menuButton}>Login</Typography>
          <Typography color="inherit"className={classes.menuButton}>Leaderboard</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar
