import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {PersonIcon} from "../icons/PersonIcon";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import {useForm} from "react-hook-form";
import * as authService from "../../services/authService";
import {ROUTES} from "../../utils/routes";
import {useHistory} from "react-router-dom";
import AppLogo from "../logotypes/AppLogo";

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background-color: ${({theme}) => theme.colors.dark_blue};
      justify-content: center;
      align-items: center;
`;

const LoginForm = styled.form`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5rem;
      width: 40rem;
      height: 47rem;
      border-radius: 2rem;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
`;

const InputsWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 4rem;
`;

const ErrorWrapper = styled.div`
      display: flex;
      width: 100%;
      font-size: ${({theme}) => theme.fontSize.s};
      padding-top: 0.3rem;
      height: 3rem;
      color: ${({theme}) => theme.colors.error};
      justify-content: flex-end;
      
      ${({AuthRequest}) => AuthRequest && css`
          justify-content: center;
          font-size: ${({theme}) => theme.fontSize.m};
          margin-top: -2rem;
      `}
`;


// --- CHECK IF ERRORS ---
const hasInputError = inputError => inputError && inputError.value === undefined;
const hasFormErrors = errors => !(errors.username === undefined && errors.password === undefined);

// --- INPUT ERROR MESSAGES ---
const InputValidationError = inputError => (
    <ErrorWrapper>
        {hasInputError(inputError) ? null : inputError.value.message}
    </ErrorWrapper>
);

// --- AUTH REQUEST ERROR MESSAGE ---
const AuthRequestError = ({isError}) => (
    <ErrorWrapper AuthRequest>
        {isError ? 'Username or password incorrect.' : null}
    </ErrorWrapper>
);


const AuthFrom = () => {
    const history = useHistory();
    const {handleSubmit, register, errors} = useForm();
    const [authError, setAuthError] = useState(false);

    const onSubmit = ({username, password}) => {
        if (authService.authenticate(username, password)) history.replace(ROUTES.USER.PALINDROMES);
        else if (!authError) setAuthError(true);
    };

    return (
        <Wrapper>
            <AppLogo smallWhite={true}/>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <PersonIcon width="10rem" height="10rem"/>
                <InputsWrapper>
                    <Input
                        name="username"
                        type="text"
                        placeholder="Username"
                        onFocus={() => setAuthError(false)}
                        hasError={hasInputError(errors.username)}
                        ref={register({required: "Username cannot be empty."})}
                    />
                    <InputValidationError value={errors.username}/>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onFocus={() => setAuthError(false)}
                        hasError={hasInputError(errors.password)}
                        ref={register({required: "Password cannot be empty."})}
                    />
                    <InputValidationError value={errors.password}/>
                </InputsWrapper>
                <AuthRequestError isError={authError}/>
                <Button disabled={hasFormErrors(errors)}>Login</Button>
            </LoginForm>
        </Wrapper>
    );
};

export default AuthFrom;