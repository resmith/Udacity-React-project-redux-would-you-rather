import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// import Question from './Question'

const UNANSWERED = 'unanswered'
const ANSWERED = 'answered'

const Question = (props) => {
  if (props.question === null) {
    return <p>This Question doesn't exist</p>
  }

  return (
    // <Link to={`/questions/1234`}className='question'>
    <Link to={`/questions/${props.question.id}`}className='question'>
      Would you rather {props.question.optionOne.text} or
      {props.question.optionTwo.text}?
    </Link>
  )
}


class Dashboard extends Component {

  componentWillMount () {
    this.setState({questions: UNANSWERED})
  }

  handleChange = (event, index, value) => this.setState({questions: value});

  render() {
    const { authedUser } = this.props;

    return (
      <div>
        <h3 className='center'>The Questions</h3>
        <DropDownMenu value={this.state.questions} onChange={this.handleChange}>
          <MenuItem value={UNANSWERED} primaryText="Unanswered Questions" />
          <MenuItem value={ANSWERED} primaryText="Answered Questions" />
        </DropDownMenu>
        <ul className='dashboard-list'>
          { this.props.questions && this.state.questions === UNANSWERED &&
            this.props.questions.filter(question =>
              question.optionOne.votes.includes(authedUser) === false &&
              question.optionTwo.votes.includes(authedUser) === false )
            .map((question) => (
              <li key={question.id}>
                <Question question={question} />
              </li>
            ))}

          { this.props.questions && this.state.questions === ANSWERED &&
            this.props.questions.filter(question => question.optionOne.votes.includes(authedUser)
              || question.optionTwo.votes.includes(authedUser)).map((question) => (
                <li key={question.id}>
                  <Question question={question} />
              </li>
            ))}


        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions}) {
  return {
    authedUser,
    questions: Object.values(questions)
  }
}

export default connect(mapStateToProps)(Dashboard)
