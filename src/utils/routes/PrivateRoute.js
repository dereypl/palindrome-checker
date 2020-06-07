import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {ROUTES} from './index';
import * as authService from "../../services/authService";

const PrivateRoute = ({component: Component, acceptedRoles, ...restProps}) => (

    <Route {...restProps} render={props => authService.isUserLogged() ?
        <Component {...props} />
        :
        <Redirect to={{pathname: ROUTES.PUBLIC.AUTH, state: {from: props.location}}}/>}
    />
);

export default PrivateRoute;