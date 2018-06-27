import React, { Component } from 'react';
import {connect} from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import Question from './Question'

class Dashboard extends Component {
  componentWillMount () {
    this.setState({questions: 1})
  }

  handleChange = (event, index, value) => this.setState({questions: value});

  render() {
    const { authedUser } = this.props;

    return (
      <div>
        <h3 className='center'>The Questions</h3>
        <DropDownMenu value={this.state.questions} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Unanwered Questions" />
          <MenuItem value={2} primaryText="Anwered Questions" />
        </DropDownMenu>
        <ul className='dashboard-list'>
          {this.props.questionIds.filter(question => !question.optionOne.votes.includes(authedUser)
            && !question.optionTwo.votes.includes(authedUser)).map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions}) {
  return {
    questionIds: Object.keys(questions)
    .sort((a,b) => questions[b].timpestamp  - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
