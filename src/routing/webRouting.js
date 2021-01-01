import React, { Component } from 'react'
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { TODO } from "../conainer";


class WebRouting extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            // add browser history from history
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path='/'>
                        <TODO />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default WebRouting
