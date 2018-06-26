import React, {Component} from 'react'
import { Route, Switch } from 'react-router'
import {connect} from 'react-redux'

import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import Signin from '../components/Signin'
import Help from '../components/Help'

const signedInRoutes = (
  <Switch>
    <Route path='/' exact component={Dashboard}/>
    <Route path='/questions/new' exact component={NewQuestion}/>
    <Route path='/signin' exact component={Signin}/>
    <Route path='/help' exact component={Help}/>
  </Switch>
)

const notSignedInRoutes = (
  <Switch>
    <Route path='/' component={Signin}/>
  </Switch>
)

class TheRoutes extends Component {
  render () {
    console.log('routes props:', this.props)
    const {authedUser} = this.props

    if (authedUser) { return (<div>{signedInRoutes}</div>) }
    else { return (<div>{notSignedInRoutes}</div>) }
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(TheRoutes)
