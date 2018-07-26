import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../utils/constants'

export default function questions (state = {}, action) {
  switch(action.type) {
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
      console.log('***** reducer ADD_VOTE action:', action)
      const { question, answer, authedUser } = action
      console.log('reducer ADD_VOTE  question:', question)
      console.log('reducer ADD_VOTE  authedUser:', authedUser)
      console.log('reducer ADD_VOTE answer:', answer)

      // let updatedVote = {
      //   [question.id]: {
      //     ...state[question.id],
      //     optionOne: state[question.id].optionOne.votes.concat(action.authedUser)
      //
      //   }
      // }

      let updatedQuestion = {
        [question.id]: {
          ...state[question],
          // [answer]: question.[answer].votes.concat([authedUser])
          bobbyField: 'I was here'
        }
      }

      return {
        ...state,
        [action.question.id]: updatedQuestion,
      }
    default :
      return state
  }
}
