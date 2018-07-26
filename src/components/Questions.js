import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CheckIcon from 'react-icons/lib/fa/check'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { handleAddVote } from '../actions/questions'
import PageNotFound from '../components/PageNotFound'
import { DEFAULT_AVATAR } from '../utils/constants'
import { styles } from '../utils/styles'

class Questions extends Component {
  handleAddVote (vote) {
    const { authedUser, question, dispatch } = this.props
    console.log('Questions.handleAddVote question:', question)
    console.log('Questions.handleAddVote authedUser:', authedUser)
    console.log('Questions.handleAddVote vote:', vote)

    dispatch(handleAddVote(question, authedUser, vote))
  }

  render () {
    console.log('component\Questions props:', this.props)
    const { authedUser, question, users, match } = this.props
    console.log('component\Questions question:', question)
    if (!question) { return <PageNotFound /> }

    const questionAuthor = users.find(user => user.id === question.author)
    console.log('component\Questions question.author:', question.author)
    console.log('component\Questions questionAuthor:', questionAuthor)
    const id = match.params.questionId
    console.log('component\Questions id:', id)
    const theQuestion = Object.assign({}, question[id])
    console.log('Questions theQuestion:', theQuestion)

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
          <FlatButton label="Vote #1" onClick={() => this.handleAddVote('optionOne')}/>
          <FlatButton label="Vote #2" onClick={() => this.handleAddVote('optionTwo')}/>
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
