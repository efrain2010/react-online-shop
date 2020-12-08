import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ShoppingCartReducer from '../../store/reducers/ShoppingCartReducer'

import Layout from '../Layout'

import { theme, useStyles } from '../../config/theme'

const store = createStore(
  ShoppingCartReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  useStyles()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
