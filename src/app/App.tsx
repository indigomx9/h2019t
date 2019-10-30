import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Apollo } from "../components/Apollo";
import { Contacts } from "../containers/Contacts";
import "./App.css";

export const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Apollo} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

