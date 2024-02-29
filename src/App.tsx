import React from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import vivoTheme from './styles/Vivo.styled';
import { Title } from './components/Title';
import { Main } from './components/Main';
import AsideMenu from './components/AsideMenu';
import { Card } from './components/Card/Card';
import { CardsWrapper } from './components/CardsWrapper';
import CardHeader from './components/Card/CardHeader';


function App() {
  return (
    <ThemeProvider theme={vivoTheme}>
      <GlobalStyle />
        <Header/>
        <AsideMenu/>
        <Main>
          <Title>Tecnologias</Title>
          <Title>Descobrir</Title>
          <CardsWrapper>
            <Card.Root>
              <Card.Header cardTitle='200 Mega' cardSubTitle='+Wi-fi e Modem grátis'/>
              sas
            </Card.Root>
            <Card.Root>
              sas
            </Card.Root>
            <Card.Root>
              sas
            </Card.Root>
          </CardsWrapper>
        </Main>
      </ThemeProvider>
  );
}

export default App;
