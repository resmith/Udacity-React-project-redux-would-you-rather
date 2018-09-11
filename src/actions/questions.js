import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'
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
  console.log('actions addQuestion question authedUser:', question)
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddVote (question, vote, authedUser) {
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

export function handleAddPoll (info) {

  return (dispatch, getState) => {
    console.log('actions questions handleAddPoll info:', info)
    const { authedUser } = getState()
    dispatch(showLoading())

    const question = {
      optionOneText: info.optionOneText,
      optionTwoText: info.optionTwoText,
      author: authedUser
    }
    return saveQuestion(question)
      // .then((savedQuestion) => console.log('saveQuestion2 savedQuestion', savedQuestion))
      .then((savedQuestion) => dispatch(addQuestion(savedQuestion)))
      .then(() => dispatch(hideLoading()))
  }
}
