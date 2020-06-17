import './App.css';

import React, {Component, Fragment} from 'react';
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {Provider} from 'react-redux';
import store from "./store";
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layout/Alerts";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header/>
                        <Alerts/>
                        <div className='container'>
                            <Dashboard/>
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
