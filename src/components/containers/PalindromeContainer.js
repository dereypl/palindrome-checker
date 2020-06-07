import React from "react";
import styled, {css} from "styled-components";
import {ErrorIcon} from "../icons/ErrorIcon";
import {CheckIcon} from "../icons/CheckIcon";


const Wrapper = styled.div`
      display:flex;
      height: 10rem;
      width: 90%;
      min-width: 40rem;
      border-radius: 1rem;
      background-color: white;
      margin-top: 1.5rem;
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
      align-items: center;
      
      ${({isPalindrome}) => isPalindrome === false && css`
          background-color: #efefef;
      `} 
`;

const Expression = styled.div`
      display:flex;
      width: 65%;
      height: 100%;
      color: ${({theme}) => theme.colors.dark_blue};
      font-size: ${({theme}) => theme.fontSize.xl};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      align-items: center;
      padding: 0 5%;
      
      ${({isPalindrome}) => isPalindrome === false && css`
          color: ${({theme}) => theme.colors.text_gray};
      `}
`;

const StatusMessage = styled.div`
      display:flex;
      width: 25%;
      height: 100%;
      color: ${({theme}) => theme.colors.dark_blue};
      font-size: ${({theme}) => theme.fontSize.m};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      align-items: center;
      justify-content: flex-end;
      padding: 0;
      
      ${({isPalindrome}) => isPalindrome === false && css`
          color: ${({theme}) => theme.colors.text_gray};
      `}
`;

const IconWrapper = styled.div`
      display:flex;
      width: 10%;
      height: 100%;
      justify-content: center;
      align-items: center;
`;

// --- GET EXPRESSION STATUS MESSAGE ---
const getStatusMessage = status => status ?
    <StatusMessage isPalindrome={status}>It's a palindrome!</StatusMessage> :
    <StatusMessage isPalindrome={status}>That's not a palindrome.</StatusMessage>;

// --- GET EXPRESSION STATUS ICON ---
const getStatusIcon = status => status ? <CheckIcon/> : <ErrorIcon/>;


const PalindromeContainer = ({palindrome}) => {

    const {value, isPalindrome} = palindrome;

    return (
        <Wrapper isPalindrome={isPalindrome}>
            <Expression isPalindrome={isPalindrome}>{value}</Expression>
            {getStatusMessage(isPalindrome)}
            <IconWrapper>
                {getStatusIcon(isPalindrome)}
            </IconWrapper>
        </Wrapper>
    );
};

export default PalindromeContainer;