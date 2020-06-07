import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import AuthFrom from "./components/views/AuthForm";
import StylesProvider from "./components/ui-config/StylesProvider";
import PrivateRoute from "./utils/routes/PrivateRoute";
import Palindromes from "./components/views/Palindromes";
import {Provider} from "react-redux";
import store from "./store/configureStore";


const App = () => (
    <Provider store={store}>
        <StylesProvider>
            <HashRouter basename='/'>
                <Switch>
                    <Route exact path={ROUTES.PUBLIC.AUTH} component={AuthFrom}/>
                    <PrivateRoute exact path={ROUTES.USER.PALINDROMES} component={Palindromes}/>
                </Switch>
            </HashRouter>
        </StylesProvider>
    </Provider>
);

export default App;
