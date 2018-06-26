import React from 'react'
import ReactDOM from 'react-dom'

import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'

// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {routerMiddleware, connectRouter} from 'connected-react-router'

import App from './components/App'
import rootReducer from './reducers'
import logger from 'redux-logger'
// import logger from './middleware/logger'   // Self created logger

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      thunkMiddleware, routerMiddleware(history), logger
    )
  )
)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history}/>
      </Provider>
    </AppContainer>,
    document.getElementById('root'))
}

render()

// Hot reloading
if (module.hot) {
  render()
  // Reload components
  module.hot.accept('./components/App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}
