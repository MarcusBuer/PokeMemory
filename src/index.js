import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Home from 'Pages/Home'

import { CardgameProvider } from 'Contexts/CardgameContext'

import { GlobalStyles } from 'Styles/GlobalStyles'
import DarkTheme from 'Styles/themes/dark'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <CardgameProvider>
        <GlobalStyles />
        <Home />
      </CardgameProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
