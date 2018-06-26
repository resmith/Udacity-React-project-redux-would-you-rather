import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render () {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't existd</p>
    }

    const { id, optionOne, optionTwo } = question

    return (
      <Link to={`/question/${id}`}className='question'>
        {optionOne.text} or {optionTwo.text}
      </Link>
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

export default withRouter(connect(mapStateToProps)(Question))
