import './App.css';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {Provider} from 'react-redux';
import store from "./store";
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layout/Alerts";
import Login from "./components/accounts/login";
import Register from "./components/accounts/register";



const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header/>
                            <Alerts/>
                            <div className='container'>
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route exact path="/login" component={Login}/>
                                    <Route exact path="/register" component={Register}/>
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
