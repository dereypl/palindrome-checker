import React from 'react'
import styled from 'styled-components'
import SearchBarContainer from "../containers/SearchBarContainer";
import {useSelector} from "react-redux";
import PalindromeContainer from "../containers/PalindromeContainer";


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

const Palindromes = () => {

    const palindromesCollection = useSelector(state => state.palindromes || []);

    return (
        <>
            <Header/>
            <Wrapper>
                <SearchBarContainer/>
                <h3>Last checked</h3>
                {palindromesCollection.map((palindrome, index) =>
                    <PalindromeContainer key={index} palindrome={palindrome}/>)
                }
            </Wrapper>
        </>
    )
};

export default Palindromes;
