import { RECEIVE_USERS, ADD_VOTE_TO_USER, ADD_QUESTION_TO_USER } from '../utils/constants'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case ADD_VOTE_TO_USER :
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

    case ADD_QUESTION_TO_USER :

      return {
        ...state,
        [action.question.author]: {...action.authedUser,
          questions: action.users[action.question.author].questions.concat([action.question.id])
        }
      }

    default :
      return state
  }
}
