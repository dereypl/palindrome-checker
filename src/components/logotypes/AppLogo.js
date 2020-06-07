import React from 'react'
import styled, {css} from "styled-components";
import {ArrowsIcon} from "../icons/ArrowsIcon";

const LogoWrapper = styled.div`
      display:flex;
      width: 50rem;
      height: 10rem;

      ${({smallWhite}) => smallWhite === true && css`
          width: 38rem;
          margin-bottom: 4rem;
      `}
`;

const IconWrapper = styled.div`
      display:flex;
      width: 15%;
      height: 100%;
      align-items: center;
      justify-content: center;
`;

const TextWrapper = styled.div`
      display:flex;
      width: 90%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      position:relative;

      span {
        font-size: 4rem;
        font-weight: ${({theme}) => theme.fontWeight.bold};
        color: ${({theme}) => theme.colors.dark_blue};
          ::after{
             content:'BY MATEUSZ PASICH';
             font-size: ${({theme}) => theme.fontSize.s};
             font-weight: ${({theme}) => theme.fontWeight.semiBold};
             position:absolute;
             right: 1.3rem;
             bottom: 1.8rem;
             color: ${({theme}) => theme.colors.gray};
          };
      }
      
      ${({smallWhite}) => smallWhite === true && css`
          span {
            font-size:  3rem;
            color: white;
              ::after{
                bottom: 2.2rem;
              }
           }
      `}
`;

const AppLogo = ({smallWhite}) => (
    <LogoWrapper smallWhite={smallWhite}>
        <IconWrapper>
            <ArrowsIcon fillColor={smallWhite ? 'white' : '#1B254F'}/>
        </IconWrapper>
        <TextWrapper smallWhite={smallWhite}>
            <span>Palindrome checker</span>
        </TextWrapper>
    </LogoWrapper>
);

export default AppLogo;