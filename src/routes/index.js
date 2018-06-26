import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
// import TweetPage from './TweetPage'


const routes = (
  <div>
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/question' exact component={NewQuestion}/>
    </Switch>
  </div>
)

export default routes
