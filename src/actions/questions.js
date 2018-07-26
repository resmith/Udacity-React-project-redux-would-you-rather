import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'
import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  }
}

function addVote (question, answer, authedUser) {
  console.log('actions addVote question:', question)
  console.log('actions addVote authedUser:', authedUser)
  console.log('actions addVote vote:', answer)
  return {
    type: ADD_VOTE,
    question,
    answer,
    authedUser
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddVote (question, vote, authedUser ) {
  console.log('actions handleAddVote question:', question)
  console.log('actions handleAddVote authedUser:', authedUser)
  console.log('actions handleAddVote vote:', vote)
  return (dispatch, getState) => {
    const { authedUser } = getState()
    console.log('actions handleAddVote return authedUser:', authedUser)
    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer: vote
    })
      .then(() => dispatch(addVote(question, vote, authedUser)))
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
