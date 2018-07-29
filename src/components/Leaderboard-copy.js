import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CheckIcon from 'react-icons/lib/fa/check'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import PageNotFound from '../components/PageNotFound'
import { DEFAULT_AVATAR } from '../utils/constants'
import { styles } from '../utils/styles'

class Leaderboard extends Component {

  render () {
    console.log('component Leaderboard props:', this.props)
    console.log('component Leaderboard state:', this.state)
    let { questions, users } = this.props

    console.log('component Leaderboard users:', users)
    // if (users.length > 0) {
    //   const tallyVotes = {}
    //   users.map((user) => {
    //     tallyVotes[user] = {
    //       questionsCreated: user.questions.length,
    //       votes: 0,
    //       total: 0
    //     }
    //   })

    //***  Tally up the questions and votes
    const tallyVotes = {}
    // First get from the users object the number of questions created
    if (users.length > 0) {
        let user = {}
        for (var key in users) {
          if (users.hasOwnProperty(key)) {
            user = users[key].id
            tallyVotes[user] = {
              questionsCreated: users[key].questions.length,
              votes: 0,
              total: users[key].questions.length
            }
          }
        }

            console.log('component Leaderboard init tallyVotes:', tallyVotes)

          // Now add up the votes
        let question = {}
        let votes = []
        for (var key in questions) {
          if (questions.hasOwnProperty(key)) {
            console.log('component Leaderboard key,questions[key]:', key, questions[key])
            question = questions[key]
            console.log(question)
            votes = question.optionOne.votes
            votes.map((user) => {
              console.log('votes.map user', user)
              tallyVotes[user] = {
                votes: user.votes + 1,
                total: user.questionsCreated + user.votes + 1 }
            })
          }
        }
      }

      console.log('component Leaderboard END tallyVotes:', tallyVotes)

    // question.optionOne.votes.forEach((vote,index) => (
    //   console.log('component.Leaderboard votes.forEach vote',vote)
    //   console.log('component.Leaderboard votes.forEach index',index)
    //   let theUser = question.optionOne.votes[index]
    //   console.log('component.Leaderboard votes.forEach theUser',theUser)
    // ))

    return (
      <Card>
        <CardHeader
          title="Leaderboard"
          subtitle=''
          avatar=''
          data-tip=''
        />
        <CardTitle
          title='a'
          subtitle='b'
        />
        <CardText>
          c
        </CardText>
        <CardText>
          d
        </CardText>
      </Card>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { match }) {
  // const question = Leaderboard[id]

  return {
    authedUser,
    users: Object.values(users),
    questions
  }
}

export default withRouter(connect(mapStateToProps)(Leaderboard))
