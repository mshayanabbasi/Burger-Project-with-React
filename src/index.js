import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import './index.css';
import thunk from 'redux-thunk'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilder from './store/reducers/burgerBuilder'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(burgerBuilder, composeEnhancers(
		applyMiddleware(thunk)
))

const app = (
	<Provider store={store}>
    	<Router>
        	<App />
    	</Router>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
