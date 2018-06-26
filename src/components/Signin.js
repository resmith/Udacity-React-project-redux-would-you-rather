import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { setAuthedUser } from '../actions/authedUser'

class Signin extends Component {
  constructor(props) {
    super(props);
    // this.state = {userId: props.userIds[0]};
  }

  componentWillMount() {
    this.props.dispatch(setAuthedUser(null))
    this.setState(() => ({
      userId: this.props.userIds[0]
    }))
  }

  handleChange = (event, index, value) => {
    this.setState({userId: value})
    const { dispatch } = this.props
    dispatch(setAuthedUser(value))
    dispatch(push('/'))
  }


  render() {
    console.log('Signin props:', this.props)
    console.log('Signin state:', this.state)
    const { userIds } = this.props;


    return (
      <div>
        <h3 className='center'>Sign In</h3>
        { userIds && userIds.length &&
          <DropDownMenu
            value={this.state && this.state.userId ? this.state.userId : this.props.userIds[0] }
            onChange={this.handleChange}
          >
            {userIds.map((id) => (
              <MenuItem key={id} value={id} primaryText={id} />
            ))}
          </DropDownMenu>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users}) {
  return {
    authedUser,
    userIds: Object.keys(users).sort()
  }
}

// const mapDispatchToProps = dispatch => ({
//   setUser: (userId) => dispatch(setAuthedUser(userId)),
// })

export default connect(mapStateToProps)(Signin)
// export default connect(mapStateToProps, mapDispatchToProps)(Signin)
