import React, {Component} from 'react'
import { Route, Switch } from 'react-router'
import {connect} from 'react-redux'

import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import Signin from '../components/Signin'
import Help from '../components/Help'

class SignedInRoutes extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/questions/new' exact component={NewQuestion}/>
        <Route path='/signin' exact component={Signin}/>
        <Route path='/help' exact component={Help}/>
      </Switch>
    )
  }
}

class NotSignedInRoutes extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={Signin}/>
      </Switch>
    )
  }
}

class TheRoutes extends Component {
  render () {
    console.log('routes props:', this.props)
    const {authedUser} = this.props

    if (authedUser) {
      return (<SignedInRoutes />)
    } else {
      return (<NotSignedInRoutes />)
    }
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(TheRoutes)
