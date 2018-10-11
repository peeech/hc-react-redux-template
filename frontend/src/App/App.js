import React, { Component } from 'react';
import { INIT_UI } from './ducks/ui';
import store from './../store';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
    componentDidMount() {
        store.dispatch({type: INIT_UI});
    }

    render() {
        return (
            <Main/>
        );
    }
}

export default App;
