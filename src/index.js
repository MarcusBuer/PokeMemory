import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Home from 'Pages/Home'

import { GlobalStyles } from 'Styles/GlobalStyles'
import DarkTheme from 'Styles/themes/dark'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
