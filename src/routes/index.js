import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import Questions from '../components/Questions'
import Signin from '../components/Signin'
import Help from '../components/Help'


// This is no longer Used
// todo: Move the routes out of App.JS into this file
export const allRoutes = (
  <Switch>
    {/* Public Routes */}
    <Route path='/help' exact component={Help}/>

    {/* Protected Routes */}

    <Route exact path='/' component={Dashboard}/>
    <Route exact path='/questions/new' component={NewQuestion}/>
    <Route exact path='/questions/:questionId'  component={Questions}/>
    <Route exact path='/signin'  component={Signin}/>

    {/*  Redirect to login if none match */}
    <Redirect from="/" to="/signin"/>

  </Switch>
)




export const protectedRoutes = (
  <div>
    <Route path='/' exact component={Dashboard}/>
    <Route path='/questions/new' exact component={NewQuestion}/>
    <Route path='/questions/:questionId' exact component={Questions}/>
    <Route path='/signin' exact component={Signin}/>

  </div>
)

export const publicRoutes = (
  <div>
    <Route path='/help' exact component={Help}/>
  </div>
)

export const signinRoute = (
  <div>
    <Route path='/' component={Signin}/>
  </div>
)
