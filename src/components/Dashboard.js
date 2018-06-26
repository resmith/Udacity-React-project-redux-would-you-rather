import React, { Component } from 'react';
import {connect} from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import Question from './Question'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    return (
      <div>
        <h3 className='center'>The Questions</h3>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Unanwered Questions" />
          <MenuItem value={2} primaryText="Anwered Questions" />
        </DropDownMenu>
        <ul className='dashboard-list'>
          {this.props.questionIds.map((id) => (
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
