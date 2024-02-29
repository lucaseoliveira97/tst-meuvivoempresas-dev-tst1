import React from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import vivoTheme from './styles/Vivo.styled';
import { Title } from './components/Title';
import { Main } from './components/Main';
import AsideMenu from './components/AsideMenu';

function App() {
  return (
    <ThemeProvider theme={vivoTheme}>
      <GlobalStyle />
        <Header/>
        <AsideMenu/>
        <Main>
          <Title>Tecnologias</Title>
          <Title>Descobrir</Title>
        </Main>
      </ThemeProvider>
  );
}

export default App;
