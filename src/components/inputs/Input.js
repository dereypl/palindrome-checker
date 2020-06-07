import styled, {css} from 'styled-components';

const Input = styled.input`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '0'};
      height: ${({height}) => height || '4rem'};
      padding: 1.5rem 3rem 1.5rem 3rem;
      font-size: ${({theme}) => theme.fontSize.m};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: ${({theme}) => theme.colors.inputs_background};
      border: none;
      border-radius: 1rem;
      width: ${({width}) => width || '100%'};

      ::placeholder {
        color: ${({theme}) => theme.colors.text_gray};
      }
      &:focus{
         outline: none;
      }
      
      ${({hasError}) => hasError && css`
          border: 0.1rem solid ${({theme}) => theme.colors.error};
      `}
      
      ${({SearchPalindrome}) => SearchPalindrome && css`
          font-size: ${({theme}) => theme.fontSize.xl};
          height: 5rem;
      `}
`;

export default Input;