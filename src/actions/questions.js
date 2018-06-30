import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'
import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  }
}

function addVote (question) {
  return {
    type: ADD_VOTE,
    question
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddVote (authedUser, qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then((tweet) => dispatch(addQuestion(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}

// export function handleAddQuestion (text, question) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState()
//     dispatch(showLoading())
//
//     return saveQuestion({
//       text,
//       author: authedUser,
//       replyingTo
//     })
//     .then((tweet) => dispatch(addQuestion(tweet)))
//     .then(() => dispatch(hideLoading()))
//   }
// }
