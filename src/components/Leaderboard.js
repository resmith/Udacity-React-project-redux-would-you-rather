import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

class Leaderboard extends Component {

  render () {
    const { users } = this.props
    const showCheckboxes = false

    //  ***  Tally up the questions and votes
    const leaderboard = users.sort((a, b) =>
      (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
    )

    return (
      <div>
        <h2>Leaderboard</h2>

        <Table selectable={showCheckboxes}>
          <TableHeader
            displaySelectAll={showCheckboxes}
            adjustForCheckbox={showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn>User</TableHeaderColumn>
              <TableHeaderColumn>Pic</TableHeaderColumn>
              <TableHeaderColumn>Questions</TableHeaderColumn>
              <TableHeaderColumn>Votes</TableHeaderColumn>
              <TableHeaderColumn>Total</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={showCheckboxes}
          >
            { leaderboard.map((user) =>
              <TableRow key={user.id}>
                <TableRowColumn>{user.id}</TableRowColumn>
                <TableRowColumn><img src={user.avatarURL} className="avatar" alt={user.name} /></TableRowColumn>
                <TableRowColumn>{ user.questions.length}</TableRowColumn>
                <TableRowColumn>{ Object.keys(user.answers).length }</TableRowColumn>
                <TableRowColumn>{ Object.keys(user.answers).length + user.questions.length }</TableRowColumn>
              </TableRow>
            )
            }
          </TableBody>
        </Table>
      </div>
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
