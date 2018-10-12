import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleAddPoll } from '../actions/questions'

class NewPoll extends Component {
  componentWillMount () {
    this.setState({
      optionOne: '',
      optionTwo: ''
    })
  }
  handleChangeOptionOne = (e) => {
    const optionOne = e.target.value

    this.setState(() => ({
      optionOne
    }))
  }
  handleChangeOptionTwo = (e) => {
    const optionTwo = e.target.value

    this.setState(() => ({
      optionTwo
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { authedUser, dispatch } = this.props

    const question = {
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    }
    dispatch(handleAddPoll(question))

    this.setState(() => ({
      optionOne: '',
      optionTwo: ''
    }))

    this.props.history.push(`/`)
  }

  render () {
    const { optionOne, optionTwo } = this.state
    const optionOneLeft = 280 - optionOne.length;
    const optionTwoLeft = 280 - optionTwo.length;

    return (
      <div>
        <h3 className='center'>New Question</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          Would you rather<br />
          <textarea
            placeholder="option One"
            value={optionOne}
            onChange={this.handleChangeOptionOne}
            className='textarea'
            maxLength={280}
          /><br />
          {optionOneLeft <= 100 && (
            <div className='tweet-length'>
              {optionOneLeft}
            </div>
          )}

          <textarea
            placeholder="option Two"
            value={optionTwo}
            onChange={this.handleChangeOptionTwo}
            className='textarea'
            maxLength={280}
          /><br />
          {optionTwoLeft <= 100 && (
            <div className='tweet-length'>
              {optionTwoLeft}
            </div>
          )}

          <br />
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo  === '' }
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users}, { match }) {


  return {
    authedUser,
    users: Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(NewPoll))
