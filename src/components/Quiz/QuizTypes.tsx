import React, { useEffect } from 'react'
import "./quiz.css" 
import axios from "axios"
import { UseQuiz } from '../../context/quixContext';
import QuizTypeCategory from '../../pages/QuizTypeCategory';
import { QuizCategory } from '../../data/quiz.types';



function QuizTypes() {
    const { state : { category }, dispatch } = UseQuiz()
    
    console.log(category)
    useEffect(() => {
        (async function getCategory() {
            try{
                const response = await axios.get(`https://crickart-quiz.herokuapp.com/category`)
                console.log(response.data)
                dispatch({ type : "SET__CATEGORY", payload : response.data })
            }catch(error){
                console.log(error)
            }
        })()
    }, [dispatch])

    return (
        <div className="quiz" >
            {category?.map((categoryItem : QuizCategory)  => (
                <ul>
                    <QuizTypeCategory categoryItem={categoryItem}/>
                </ul>
            ))}
            {/* <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                             {category?.quizName}
                        </Typography>
                        <Chip label='Easy' style={{ backgroundColor:"blue", marginRight:"0.5rem", color:"white" }}/>
                        <Chip label='Sports'/>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/quiz/${category?._id}`} style={{ textDecoration:"none" }}>
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
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {category?.quizName}
                        </Typography>
                        <Chip label='Moderate'/>
                    </CardContent>
                </CardActionArea>
                        <CardActions>
                            <Link to={`/quiz/${category?._id}`} style={{ textDecoration:"none" }}>
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
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {category?.quizName}
                        </Typography>
                        <Chip label='Hard'/>
                    </CardContent>
                </CardActionArea>
                        <CardActions>
                            <Link to={`/quiz/${category?._id}`} style={{ textDecoration:"none" }}>
                            <Button
                                size="small" 
                                color="primary"
                                className={classes.button}
                            >
                                Start
                            </Button>
                            </Link>
                </CardActions>
            </Card>     */}
        </div>
    )
}

export default QuizTypes
