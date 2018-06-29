import React, {Component} from 'react'
// import ReactDOM from 'react-dom'

// import PropTypes from "prop-types";
import {connect} from 'react-redux'
// import {Link, withRouter} from 'react-router-dom'
import {ConnectedRouter, push} from 'connected-react-router'
import ReactTooltip from 'react-tooltip'

import LoadingBar from 'react-redux-loading-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import { protectedRoutes, signinRoute } from '../routes'
import {handleInitialData} from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'

// class Login extends Component {
//   render () {
//     return (<FlatButton {...this.props} label="Login"/>)
//   }
// }

const Login = ({dispatch}) => (
  <FlatButton onClick={() => dispatch(push('/signin'))} label="Login"/>
)

const NavMenu = ({dispatch}) => (
  <IconMenu iconButtonElement={<IconButton > <NavigationMenu/></IconButton>}
    targetOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }} anchorOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }}>
    <MenuItem primaryText="Home" onClick={() => dispatch(push('/'))}/>
    <MenuItem primaryText="New Question" onClick={() => dispatch(push('/questions/new'))}/>
  </IconMenu>)

const Logged = ({dispatch, userId}) => (
  <IconMenu iconButtonElement={<IconButton > <MoreVertIcon/></IconButton>}
    targetOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }} anchorOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }}>
    <MenuItem primaryText="Sign out" onClick={() => dispatch(setAuthedUser(null))}/>
    <MenuItem primaryText="Help" onClick={() => dispatch(push('/help'))}/>
    <MenuItem primaryText={userId} />
  </IconMenu>)

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    console.log('App props:', this.props)
    console.log('App state:', this.state)
    const { history, authedUser, dispatch } = this.props

    return (
      <MuiThemeProvider>
        <div>
          <LoadingBar/>
          <AppBar
            title="Would You Rather?"
            iconElementLeft={<NavMenu dispatch={dispatch} />}
            iconElementRight={authedUser
              ? <Logged dispatch={dispatch} userId={authedUser}/>
              : <Login dispatch={dispatch} />}/>
          <ConnectedRouter history={history}>
            {authedUser ? protectedRoutes : signinRoute }
          </ConnectedRouter>
        </div>
        <ReactTooltip />
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
