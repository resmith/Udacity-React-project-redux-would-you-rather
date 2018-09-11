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

import { Route, Switch, Redirect } from 'react-router'

// import { protectedRoutes, publicRoutes, signinRoute } from '../routes'
import {handleInitialData} from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import Dashboard from '../components/Dashboard'
import NewPoll from '../components/NewPoll'
import Questions from '../components/Questions'
import Leaderboard from '../components/Leaderboard'
import Signin from '../components/Signin'
import Help from '../components/Help'
import PageNotFound from '../components/PageNotFound'
import '../App.css'

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
    <MenuItem primaryText="Leaderboard" onClick={() => dispatch(push('/leaderboard'))}/>
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
    const { history, authedUser, dispatch, router } = this.props

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Would You Rather?"
            iconElementLeft={<NavMenu dispatch={dispatch} />}
            iconElementRight={authedUser
              ? <Logged dispatch={dispatch} userId={authedUser}/>
              : <Login dispatch={dispatch} />}/>
          <LoadingBar />
          <ConnectedRouter history={history}>
            <Switch>
              {/* Public Routes */}
              <Route path='/help' exact component={Help}/>
              <Route exact path='/signin' component={Signin}/>
              <Route exact path='/leaderboard' component={Leaderboard}/>

              {/* Protected Routes */}
              {authedUser && <Route exact path='/' component={Dashboard}/> }
              {authedUser && <Route exact path='/questions/new' component={NewPoll}/> }
              {authedUser && <Route exact path='/questions/:questionId' component={Questions}/> }

              {/*  If no routes match and user is authenticated */}
              {authedUser && <Route path='/' component={PageNotFound}/> }

              {/*  If no routes match and user is NOT authenticated */}
              {!authedUser && router.location.pathname !== '/signin' &&
                <Redirect from="/" to="/signin"/>
              }
            </Switch>

          </ConnectedRouter>
          <ReactTooltip />
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps ({authedUser, router}) {
  return {
    authedUser,
    loading: authedUser === null,
    router
  }
}

export default connect(mapStateToProps)(App)
