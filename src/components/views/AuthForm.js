import React from 'react';
import styled from 'styled-components';
import {PersonIcon} from "../icons/PersonIcon";
import Input from "../inputs/Input";
import Button from "../buttons/Button";

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

const AuthFrom = () => (
    <Wrapper>
        <LoginForm>
            <PersonIcon width="10rem" height="10rem"/>
            <InputsWrapper>
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </InputsWrapper>
            <Button>Login</Button>
        </LoginForm>
    </Wrapper>
);

export default AuthFrom;