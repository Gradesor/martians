import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { EOLocale } from 'eo-locale'
import locales from './Locales'
import theme from './Theme'
import { PageTpl } from './components/Templates/PageTpl'
import { DashBoard } from './components/Pages/DashBoard'
import fonts from './assets/fonts'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova Regular';
    src: url('${fonts.ProximaNovaRegularEot}');
    src: url('${fonts.ProximaNovaRegularEot}?#iefix') format('embedded-opentype'),
    url('${fonts.ProximaNovaRegularWoff}') format('woff'),
    url('${fonts.ProximaNovaRegularTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'ProximaNova Bold';
    src: url('${fonts.ProximaNovaBoldEot}');
    src: url('${fonts.ProximaNovaBoldEot}?#iefix') format('embedded-opentype'),
    url('${fonts.ProximaNovaBoldWoff}') format('woff'),
    url('${fonts.ProximaNovaBoldTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  body {
    margin: 0;    
  }
  input{
    width: 100%;
    height: 100%;    
  }
  img {
    width: 100%;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  button:focus{
    outline: none;
  }
  h1,h2,h3{
    font-weight: normal;
  }
  svg, a, button{
    transition: all 0.3s ease-out;
  }
  * {
    box-sizing: border-box;
    font-family: 'ProximaNova Regular', sans-serif;
    color: #fff;
    fill: transparent;    
    font-weight: normal;
  }
`

function App() {
  const palette = "primary";
  return (
    <EOLocale.Provider language="ru" locales={locales}>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <PageTpl palette={palette}>
          <Switch>                      
              <Route path="/" exact>
                <DashBoard palette={palette} />
              </Route>            
          </Switch>
        </PageTpl>
      </ThemeProvider>
    </EOLocale.Provider>
  );
}

export default App;
