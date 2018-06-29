import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import Questions from '../components/Questions'
import Signin from '../components/Signin'
import Help from '../components/Help'

export const protectedRoutes = (
  <div>
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/questions/new' exact component={NewQuestion}/>
      <Route path='/questions/:questionId' exact component={Questions}/>
      <Route path='/signin' exact component={Signin}/>
      <Route path='/help' exact component={Help}/>
    </Switch>
  </div>
)

export const signinRoute = (
  <div>
    <Switch>
      <Route path='/' component={Signin}/>
    </Switch>
  </div>
)
