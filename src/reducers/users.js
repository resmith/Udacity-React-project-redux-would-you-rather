import { RECEIVE_USERS, ADD_VOTE_TO_USER } from '../utils/constants'

export default function users (state = {}, action) {
  console.log('reducers/users users action', action)
  console.log('reducers/users users state', state)
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case ADD_VOTE_TO_USER :
      // console.log('***** reducer ADD_VOTE_TO_USER action', action)
      // console.log('***** reducer ADD_VOTE_TO_USER users', users)
      const { question, answer, authedUser } = action

      // let updatedUser = { ...users,
      //   [authedUser]: {
      //     question: [authedUser].questions.concat([question.id]) }
      // }

      let updatedUser = { ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [question.id]: answer
        }
      }

      return {
        ...state,
        [authedUser]: updatedUser
      }

    default :
      return state
  }
}
