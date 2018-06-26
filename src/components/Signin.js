import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { setAuthedUser } from '../actions/authedUser'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {userId: props.authedUser};
  }

  handleChange = (event, index, value) => {
    this.setState({userId: value})
    const { dispatch } = this.props
    dispatch(setAuthedUser(value))
    dispatch(push('/'))
  }


  render() {
    return (
      <div>
        <h3 className='center'>Sign In</h3>
        <DropDownMenu value={this.state.userId} onChange={this.handleChange}>
          {this.props.userIds.map((id) => (
            <MenuItem key={id} value={id} primaryText={id} />
          ))}
        </DropDownMenu>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users}) {
  return {
    authedUser,
    userIds: Object.keys(users)
  }
}

// const mapDispatchToProps = dispatch => ({
//   setUser: (userId) => dispatch(setAuthedUser(userId)),
// })

export default connect(mapStateToProps)(Signin)
// export default connect(mapStateToProps, mapDispatchToProps)(Signin)
