import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      // // case ADD_QUESTION :
      // // const { question } = action
      // //
      // // let replyingTo = {}
      // // if (question.replyingTo !== null ){
      // //   replyingTo = {
      // //     [question.replyingTo]: {
      // //       ...state[question.replyingTo],
      // //       replies: state[question.replyingTo].replies.concat([question.id])
      // //     }
      // //   }
      // // }
      // return {
      //   ...state,
      //   [action.question.id]: action.question,
      // }
    case ADD_VOTE :
      console.log('***** reducer ADD_VOTE', action)
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
