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

    //***  Tally up the questions and votes
    const leaderboard = users.sort((a, b) =>
      (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
    )


      console.log('component Leaderboard END leaderboard:', leaderboard)

      leaderboard.map((user) =>
        console.log('leaders:',user.id, user.questions.length, Object.keys(user.answers).length)
      )


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
