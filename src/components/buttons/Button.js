import styled, {css} from 'styled-components';

const Button = styled.button`
      display: flex;
      padding: 0;
      margin-top: ${({marginTop}) => marginTop || '0'};
      background-color: ${({theme}) => theme.colors.dark_blue};
      width: ${({width}) => width || '100%'};
      height: 5rem;
      border: none;
      border-radius: 1rem;
      font-weight: ${({theme}) => theme.fontWeight.bold};
      font-size: ${({theme}) => theme.fontSize.m};
      color: white;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.06);
      
      transition: background-position .3s;
      background-position: 0;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({theme}) => theme.colors.yellow} 50%);
      background-size: 220%;
      
      &:hover{
          color: ${({theme}) => theme.colors.dark_blue};
          background-position: 100%;
          }
      }
      :disabled{
          cursor: default;
          background-color: ${({theme}) => theme.colors.gray};
          &:hover{
            background-position: 0;
            color: white;
          }
      }
       &:focus{
           outline: none;
       }
       
       ${({PalindromeCheck}) => PalindromeCheck && css`

          :disabled{
              cursor: default;
              color: ${({theme}) => theme.colors.gray};
              background-color: ${({theme}) => theme.colors.dark_blue};
              &:hover{
                  background-position: 0;
                  color: ${({theme}) => theme.colors.gray};
               }
          }
      `} 
`;

export default Button;