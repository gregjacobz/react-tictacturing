import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker';
// import createHistory from 'history/createBrowserHistory'
import {Router, browserHistory} from 'react-router'
import Routes from './routes'

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
    />,
    document.getElementById('root')
);
// registerServiceWorker();