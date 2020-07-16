import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '../src/custom.scss'
import App from './App'
import breakpoints from './theme/breakpoints'
import * as serviceWorker from './serviceWorker'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  spacing: 5,
  breakpoints,
  palette: {
    primary: {
      light: '#203040',
      main: '#2f455c',
      dark: '#586a7c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fa7783',
      main: '#f95665',
      dark: '#ae3c46',
      contrastText: '#fff',
    },
  },
  status: {
    danger: 'orange',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
