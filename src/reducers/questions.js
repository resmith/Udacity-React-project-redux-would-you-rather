import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'

export default function questions (state = {}, action) {
  console.log('reducers/questions questions action', action)
  console.log('reducers/questions questions state', state)
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :

      return {
        ...state,
        [action.question.id]: action.question,
        [action.question.author]: {...action.authedUser,
          questions: action.users[action.question.author].questions.concat([action.question.id])
        }
      }
    case ADD_VOTE :
      // console.log('***** reducer ADD_VOTE action', action)
      const { question, answer, authedUser } = action

      let updatedQuestion = { ...state[action.question.id],
        [answer]: {
          text: question[answer].text,
          votes: question[answer].votes.concat([authedUser]) }
      }

      return {
        ...state,
        [action.question.id]: updatedQuestion
      }
    default :
      return state
  }
}
