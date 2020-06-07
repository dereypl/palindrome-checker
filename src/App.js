import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import AuthFrom from "./components/views/AuthForm";
import StylesProvider from "./components/ui-config/StylesProvider";
import PrivateRoute from "./utils/routes/PrivateRoute";
import Palindromes from "./components/views/Palindromes";

const App = () => (
    <StylesProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.PUBLIC.AUTH} component={AuthFrom}/>
                <PrivateRoute exact path={ROUTES.USER.PALINDROMES} component={Palindromes}/>
            </Switch>
        </BrowserRouter>
    </StylesProvider>
);

export default App;
