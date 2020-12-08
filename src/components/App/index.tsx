import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import Layout from '../Layout'

import { theme, useStyles } from '../../config/theme'

const App = () => {
  useStyles()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
