import React, { useState, useEffect } from 'react';
import {
  LoginWrapper,
  LoginIcon,
  Icon,
  Label,
  ButtonLogin,
  FormItem,
  Input,
  Link,
  LoginContent,
  LoginTitle
} from './styles';

const Login = ({
  okButtonText = 'Login',
  forgetPasswordText = 'Forgot my password',
  inputUserName = 'name',
  labelUserName = 'Your name',
  inputPasswordName = 'password',
  labelPassword = 'Password',
  onSubmit
}) => {
  const loginInitialState = {
    [inputUserName]: "",
    [inputPasswordName]: "",
    submitted: false
  }

  const [loginState, setLogin] = useState(loginInitialState);

  const onChangeName = (evt) => {
    evt.preventDefault();
    setLogin({ ...loginState, [inputUserName]: evt.target.value });
  }

  const onChangePassword = (evt) => {
    evt.preventDefault();
    setLogin({ ...loginState, [inputPasswordName]: evt.target.value });
  }

  useEffect(() => {
    console.log('STATE EFFECT -> ', loginState);

    return () => {
      console.log('UNMOUNT');
      
    }
  }, [loginState.submitted]);

  return (
    <LoginWrapper>
      <LoginContent>
        <LoginIcon>
          <Icon className="fab fa-react" />                    
        </LoginIcon>
        <LoginTitle>
          REACT
        </LoginTitle>
        <FormItem>
          <Label htmlFor={inputUserName}>{labelUserName}</Label>
          <Input 
            type="text"
            name={inputUserName}
            id={inputUserName}
            value={loginState[inputUserName]}
            onChange={onChangeName}
          />
        </FormItem>

        <FormItem>
          <Label htmlFor={inputPasswordName}>{labelPassword}</Label>
          <Input 
            type="password"
            name={inputPasswordName}
            id={inputPasswordName}
            value={loginState[inputPasswordName]}
            onChange={onChangePassword}
          />
        </FormItem>

        <Link href="/">{forgetPasswordText}</Link>

        <ButtonLogin 
          type="button"
          disabled={(!loginState[inputUserName] || !loginState[inputPasswordName])}
          onClick={() => {
            setLogin({ ...loginState, submitted: true });
            onSubmit(loginState)
          }}
        >
          {okButtonText}
        </ButtonLogin>
      </LoginContent>
    </LoginWrapper>
  );
}

export default Login;