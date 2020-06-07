import React from 'react'
import styled from 'styled-components'
import SearchBarContainer from "../containers/SearchBarContainer";


const Wrapper = styled.div`
      display:flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      padding: 0 15% 10rem;
`;

const Header = styled.header`
      display:flex;
      width: 100%;
      height: 30vh;
      min-height: 20rem;
      background-color: white;
      align-items: center;
      justify-content: center;
`;

const Palindromes = () => (
    <>
        <Header/>
        <Wrapper>
            <SearchBarContainer/>
            palindromes list
        </Wrapper>
    </>
);

export default Palindromes;
