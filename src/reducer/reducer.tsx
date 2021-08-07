import { Action, InitialState } from "../../src/context/quixContext";
// import { quizOne } from "../data/quiz1"
// import { isAnswerCorrect } from "../utils/util"
import { Quiz } from "../data/quiz.types";

export const initialState: InitialState = {
  attemptedQuestion: [],
  currentQuiz: [],
  category: [],
  currentQuestionNumber: 0,
  score: 0,
  response: [],
  correctAttempt: 0,
  isOptionClicked: true,
  inCorrectAttempt: 0,
  user: [],
};

export const reducer = (
  state: InitialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "SET__QUIZ":
      return {
        ...state,
        attemptedQuestion: action.payload.quiz,
        score: 0,
      };

    case "INCREASE__QUESTION__NUMBER":
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };

    case "SET__CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "INITIALISE__CURRENT__QUIZ":
      const { quizId } = action.payload;
      const selectedQuiz = state.attemptedQuestion.filter(
        (questionObj) => questionObj.categoryId === quizId
      ) as Quiz[];
      return {
        ...state,
        currentQuiz: state.currentQuiz.concat(selectedQuiz),
      };

    case "SELECT__ANSWER":
      const { option, answer } = action.payload;
      if (option === answer) {
        return {
          ...state,
          correctAttempt: state.correctAttempt + 1,
          response: state.response.concat(option),
        };
      } else {
        return {
          ...state,
          inCorrectAttempt: state.inCorrectAttempt + 1,
          response: state.response.concat(option),
        };
      }
    case "TOTAL__SCORE":
      return {
        ...state,
        score:
          state.score +
          state.correctAttempt * action.payload -
          state.inCorrectAttempt * 1,
      };
    case "RESET":
      return {
        ...state,
        currentQuestionNumber: 0,
        score: 0,
        currentQuiz: [],
        response: [],
        correctAttempt: 0,
        isOptionClicked: true,
        inCorrectAttempt: 0,
      };
    default:
      return state;
  }
};
