import styled, { css, keyframes } from 'styled-components';
import { fade } from '../../colors';
import LoginShow from '../../assets/images/loginshow.jpg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoginWrapper = styled.div`
  background: url(${LoginShow});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const LoginContent = styled.div`
  background: #fff;
  position: absolute;
  right: 0;
  height: 100%;
  width: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  box-shadow: -9px 0px 20px rgba(51, 51, 51, 0.42);
`;

export const LoginTitle = styled.h2`
    text-align: center;
    font-size: 3em;
    font-weight: 300;
    color: #788195;
`;

export const Label = styled.label`
  display: block;
  color: #585858;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  ${props => {
    return css`
      padding: 15px;
      border: 1px solid #d9d9d9;
      outline: none;
      border-radius: 4px;
      width: 100%;

      &:active,
      &:hover,
      &:focus {
        border: 1px solid ${props.theme.primaryColor};
        box-shadow: 0 0 0 2px ${fade(props.theme.primaryColor, 0.85)};
      }  
    `;
  }}
`;

export const FormItem = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

export const ButtonLogin = styled.button`
  ${props => {
    return css`
      padding: 15px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      background: ${props.theme.primaryColor};
      cursor: pointer;
      font-size: 16px;
      outline: none;

      &[disabled],
      &:disabled {
        background: #d9d9d9;
        color: #999;
      }
    `;
  }}  
`;

export const Link = styled.a`
  padding: 15px 0;
  align-self: flex-end;
`;

export const LoginIcon = styled.div`
  ${props => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props.theme.primaryColor};
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #fff;
      margin: 0 auto;
    `;
  }}
`;

export const Icon = styled.i`
  font-size: 4em;
  color: #fff;
  animation: ${rotate} 5s linear infinite;
`;