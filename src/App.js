import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import AuthFrom from "./components/views/AuthForm";
import StylesProvider from "./components/ui-config/StylesProvider";

const App = () => (
    <StylesProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.AUTH} component={AuthFrom}/>
            </Switch>
        </BrowserRouter>
    </StylesProvider>
);

export default App;
