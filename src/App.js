import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import AuthFrom from "./components/views/AuthForm";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.AUTH} component={AuthFrom}/>
        </Switch>
    </BrowserRouter>
);

export default App;
