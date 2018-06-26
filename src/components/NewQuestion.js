import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class NewQuestion extends Component {
  render() {

    return (
      <div>
        New Question
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
