import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

// 初めてのコミット

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
