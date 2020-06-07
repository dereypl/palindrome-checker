import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background-color: ${({theme}) => theme.colors.dark_blue};
      justify-content: center;
      align-items: center;
`;

const AuthFrom = () => (
    <Wrapper>
        <div>Hello CODERS`PEAK!</div>
    </Wrapper>
);

export default AuthFrom;