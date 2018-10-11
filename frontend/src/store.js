import { createStore, applyMiddleware, compose } from 'redux';

// redux-logger is a middleware that lets you log every state change
// import logger from 'redux-logger';

// Our combined reducer
import rootReducer from './reducers';

// Import middleware
import apiMiddleware from './App/middleware/api';
import dataMiddleware from './App/middleware/data';

// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ - If redux devtools are installed then activate it
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(rootReducer, 
    composeEnhancers(applyMiddleware(apiMiddleware, dataMiddleware))
);

// This line allows to peek into store from any part of application, including devTools console
// but this is poluting global variable space and should not be used as programming pattern
// window.store = store;

export default store;