import React from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import vivoTheme from './styles/Vivo.styled';

function App() {
  return (
    <ThemeProvider theme={vivoTheme}>
      <GlobalStyle />
      <div className="App">
        <Header/>
      </div>
      </ThemeProvider>
  );
}

export default App;
