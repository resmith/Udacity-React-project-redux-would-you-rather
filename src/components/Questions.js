import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CheckIcon from 'react-icons/lib/fa/check'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import PageNotFound from '../components/PageNotFound'

import { DEFAULT_AVATAR, styles } from '../utils/defaults'

class Questions extends Component {
  render () {
    console.log('Questions props:', this.props)

    const { authedUser, question, users } = this.props
    if (!question) { return <PageNotFound /> }

    const questionAuthor = users.find(user => user.id === question.author)

    // Create the votes variables
    const optionOneNum = question.optionOne.votes ? question.optionOne.votes.length : 0
    const optionTwoNum = question.optionTwo.votes ? question.optionTwo.votes.length : 0
    const TotalNum = optionOneNum + optionTwoNum
    const optionOnePercent = TotalNum ? Math.floor((optionOneNum / TotalNum) * 100) : 0
    const optionTwoPercent = TotalNum ? Math.floor((optionTwoNum / TotalNum) * 100) : 0

    const showVotes = optionOneNum || optionTwoNum

    return (
      <Card>
        <CardHeader
          title="Would you rather"
          subtitle={`by ${questionAuthor.name}`}
          avatar={questionAuthor ? questionAuthor.avatarURL : DEFAULT_AVATAR}
          data-tip={questionAuthor.name}
        />
        <CardTitle
          title=''
          subtitle={`${question.optionOne.text} or ${question.optionTwo.text}?`}
        />
        <CardText>
          {showVotes && question.optionOne.votes.includes(authedUser) && <CheckIcon className='check-icon' /> }
          {showVotes && <div style={styles.indentPoll} >
            Option1: {question.optionOne.text}<br />
            <p>{optionOneNum} Votes</p>
            <p>{optionOnePercent}% Selected</p>
          </div>
          }
        </CardText>
        <CardText>
          {showVotes && question.optionTwo.votes.includes(authedUser) && <CheckIcon className='check-icon' /> }
          {showVotes && <div style={styles.indentPoll} >
            Option2: {question.optionTwo.text}<br />
            <p>{optionTwoNum} Votes</p>
            <p>{optionTwoPercent}% Selected</p>
          </div>
          }
        </CardText>
        <CardActions>
          <FlatButton label="Vote #1" />
          <FlatButton label="Vote #2" />
        </CardActions>
      </Card>

    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { match }) {
  // const question = questions[id]

  return {
    authedUser,
    users: Object.values(users),
    question: questions[match.params.questionId]
  }
}

export default withRouter(connect(mapStateToProps)(Questions))
