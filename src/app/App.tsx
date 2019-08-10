import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Apollo } from "../components/Apollo";
import { Persons } from "../components/Persons";
import "./App.css";

export const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Apollo} />
                <Route path="/persons" component={Persons} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

