export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions (questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions,
  }
}


// function addQuestion (tweet) {
//   return {
//     type: ADD_TWEET,
//     tweet,
//   }
// }
//
// export function handleAddQuestion (text, replyingTo) {
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
