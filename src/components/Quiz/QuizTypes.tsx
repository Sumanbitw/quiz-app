import React from 'react'
import "./quiz.css" 
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import { Container, Typography, Button } from '@material-ui/core';
import { quizOne } from "../../data/quiz1"
import { quizTwo } from '../../data/quiz2';
import { quizThree } from '../../data/quiz3';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      maxHeight:300
    },
  });

function QuizTypes() {
    const classes = useStyles()
    return (
        <div className="quiz" >
            <Container maxWidth='sm' disableGutters={true}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Quiz Set 1
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                            <CardActions>
                                <Link to={`/quiz/${quizOne.id}`}>
                                <Button
                                    size="small" 
                                    color="primary"
                                >
                                    Start
                                </Button>
                                </Link>
                    </CardActions>
                </Card>
            </Container>

						<Container maxWidth='lg' disableGutters={true}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Quiz Set 2
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                            <CardActions>
                                <Link to={`/quiz/${quizTwo.id}`}>
                                <Button
                                    size="small" 
                                    color="primary"
                                >
                                    Start
                                </Button>
                                </Link>
                    </CardActions>
                </Card>
            </Container>

						<Container maxWidth='lg' disableGutters={true}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Quiz Set 3
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                            <CardActions>
                                <Link to={`/quiz/${quizThree.id}`}>
                                <Button
                                    size="small" 
                                    color="primary"
                                >
                                    Start
                                </Button>
                                </Link>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default QuizTypes
