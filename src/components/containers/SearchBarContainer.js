import React, {useState} from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import Button from "../buttons/Button";


const SearchBar = styled.section`
      display:flex;
      width: 100%;
      height: 15rem;
      background-color: ${({theme}) => theme.colors.dark_blue};
      border-radius: 3rem;
      margin-top: -7.5rem;
      margin-bottom: 6rem;
      align-items: center;
      padding: 0 5rem;
`;

const InputWrapper = styled.div`
      display: flex;
      width: 80%;
`;

const ButtonWrapper = styled.div`
      display:flex;
      width: 20%;
      margin-left: 3rem;
`;

// --- SIMPLE VALIDATION: NOT NULL/UNDEFINED & LENGTH > 0 & NOT EMPTY ---
const validateExpression = inputValue => inputValue && inputValue.length && inputValue.trim() !== '';

const SearchBarContainer = () => {

    const [expression, setExpression] = useState('');

    const handleCheckButton = () => {
        //TODO: ADD EXPRESSION TO REDUX LIST
        alert('check triggered : ' + expression);
        setExpression('');
    };

    return (
        <SearchBar>
            <InputWrapper>
                <Input
                    SearchPalindrome
                    type='text'
                    placeholder='Write your expression...'
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                />
            </InputWrapper>
            <ButtonWrapper>
                <Button
                    PalindromeCheck
                    disabled={!validateExpression(expression)}
                    onClick={handleCheckButton}>
                    Check palindrome {'>'}
                </Button>
            </ButtonWrapper>
        </SearchBar>
    );
};

export default SearchBarContainer;