import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import Login from './components/login';
import { fade } from './colors';

const Global = createGlobalStyle`
  ${props => {
    return css`
      * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
      }

      html, body, #root, #root > div {
        height: 100%;
      }

      body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        background: #f2f2f2;
        margin: 0;
      }

      a {
        text-decoration: none;
        color: ${fade(props.theme.primaryColor, 0.25)};
        
        &:hover {
          color: ${props.theme.primaryColor};
        }
      }
    `;
  }}  
`;

const theme = {
  primaryColor: '#477cff'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Global />
          <Login
            inputPasswordName="senha"
            inputUserName="nome_usuario"
            forgetPasswordText="Esqueci minha senha"
            labelPassword="Senha"
            labelUserName="Nome"
            okButtonText="Entrar"
            onSubmit={values => console.log(values)}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
