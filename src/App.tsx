import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import vivoTheme from './styles/Vivo.styled';
import { Title } from './components/Title';
import { Main } from './components/Main';
import AsideMenu from './components/AsideMenu';
import { Card } from './components/Card/Card';
import { CardsWrapper } from './components/CardsWrapper';
import discoveries from './data/discoveries';
import Carousel from './components/Carousel';
import {technologies} from './data/technologies'

function App() {
  return (
    <ThemeProvider theme={vivoTheme}>
      <GlobalStyle />
        <Header/>
        <AsideMenu/>
        <Main>
          <Title>Tecnologias</Title>
            <Carousel itens={technologies}/>
          <Title>Descobrir</Title>
          <CardsWrapper>
            {
              discoveries.map((discovery, id) =>{
                return(
                  <Card.Root key={"discovery-card-" + id}>
                    {discovery.discoveryFeature && <Card.Feature feature={discovery.discoveryFeature}/>}
                    <Card.Header cardTitle={discovery.discoveryTitle} cardSubTitle={discovery.discoveryBonus}/>
                    <Card.Content/>
                    <Card.Footer/>
                  </Card.Root>
                )
              })
            }
          </CardsWrapper>
        </Main>
      </ThemeProvider>
  );
}

export default App;
