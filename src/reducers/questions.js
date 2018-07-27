import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      // console.log('***** reducer ADD_QUESTION action', action)

      return {
        ...state,
        [action.question.id]: action.question
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
