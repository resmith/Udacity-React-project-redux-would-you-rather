import { RECEIVE_USERS, ADD_VOTE_TO_USER } from '../utils/constants'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function addVoteToUser (question, answer, authedUser) {
  // console.log('actions addVote question:', question)
  // console.log('actions addVote vote:', answer)
  // console.log('actions addVote authedUser:', authedUser)
  return {
    type: ADD_VOTE_TO_USER,
    question,
    answer,
    authedUser
  }
}

export function handleAddVoteToUser (question, vote, authedUser) {
  return (dispatch, getState) => {
    const { users } = getState()
    // console.log('actions handleAddVote return authedUser:', authedUser)
    dispatch(showLoading())
    dispatch(addVoteToUser(question, vote, authedUser))
    dispatch(hideLoading())
  }
}
