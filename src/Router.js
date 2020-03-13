import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/company">
                    <Company />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

function Company() {
    return (
        <div>Company</div>
    );
}