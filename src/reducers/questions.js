import { RECEIVE_QUESTIONS } from '../utils/constants';

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
    default :
      return state
  }
}
