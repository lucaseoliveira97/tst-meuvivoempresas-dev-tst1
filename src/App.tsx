import React from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import vivoTheme from './styles/Vivo.styled';
import { Title } from './components/Title';

function App() {
  return (
    <ThemeProvider theme={vivoTheme}>
      <GlobalStyle />
      <div className="App">
        <Header/>
        <Title>Tecnologias</Title>
        <Title>Descobrir</Title>
      </div>
      </ThemeProvider>
  );
}

export default App;
