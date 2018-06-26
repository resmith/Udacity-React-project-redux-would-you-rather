import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import Signin from '../components/Signin'
import Help from '../components/Help'
// import TweetPage from './TweetPage'


const routes = (
  <div>
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/questions/new' exact component={NewQuestion}/>
      <Route path='/signin' exact component={Signin}/>
      <Route path='/help' exact component={Help}/>

    </Switch>
  </div>
)

export default routes
