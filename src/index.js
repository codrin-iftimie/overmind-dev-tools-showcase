import * as React from 'react'
import { render } from 'react-dom'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import App from './App'

const overmind = createOvermind(config)
render((
  <Provider value={overmind}>
    <App />
  </Provider>
), document.querySelector('#root'))
