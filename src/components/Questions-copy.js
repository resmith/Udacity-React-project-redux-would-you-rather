import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import CheckIcon from 'material-ui/svg-icons/navigation/check';

import { DEFAULT_AVATAR, styles } from '../utils/defaults'

class Questions extends Component {
  render () {
    console.log('Questions props:', this.props)


    const { authedUser, question, users } = this.props
    const questionAuthor = users.find(user => user.id === question.author)
    console.log('questionAuthor:', questionAuthor)

    const optionOneNum = question.optionOne.votes ? question.optionOne.votes.length : 0
    const optionTwoNum = question.optionTwo.votes ? question.optionTwo.votes.length : 0
    const TotalNum = optionOneNum + optionTwoNum
    const optionOnePercent = TotalNum ? Math.floor((optionOneNum / TotalNum) * 100) : 0
    const optionTwoPercent = TotalNum ? Math.floor((optionTwoNum / TotalNum) * 100) : 0

    const showVotes = optionOneNum || optionTwoNum



    return (
      <div>
        <h2> Questions </h2>

        <p>Would You Rather:</p>
        <div style={styles.indentQuestion}>
          <Avatar
            src={questionAuthor ? questionAuthor.avatarURL : DEFAULT_AVATAR }
            style={styles.avatar}
            data-tip={questionAuthor.name}
          /><br />
          {showVotes && question.optionOne.votes.includes(authedUser) && <CheckIcon /> }
          {question.optionOne.text}<br />
          { showVotes && <div style={styles.indentPoll} >
            <p>{optionOneNum} Vote</p>
            <p>{optionOnePercent}%</p>
          </div>}
          <br />

          {showVotes && question.optionTwo.votes.includes(authedUser) && <CheckIcon /> }
          {question.optionTwo.text}<br />
          { showVotes && <div style={styles.indentPoll} >
            <p>{optionTwoNum} Vote</p>
            <p>{optionTwoPercent}%</p>
          </div>}
          <br />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { match }) {
  // const question = questions[id]

  return {
    authedUser,
    users: Object.values(users),
    question: questions[match.params.questionId],
  }
}

export default withRouter(connect(mapStateToProps)(Questions))
