import React from 'react'
import styled from 'styled-components'
import SearchBarContainer from "../containers/SearchBarContainer";
import palindromes_list from '../../utils/init_state'


const Wrapper = styled.div`
      display:flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      padding: 0 15% 10rem;
      
      h3{
        color: ${({theme}) => theme.colors.dark_blue};
      }
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
            <h3>Last checked</h3>
            {palindromes_list.palindromes.map(palindrome => <p>{palindrome.value}</p>)}
        </Wrapper>
    </>
);

export default Palindromes;
