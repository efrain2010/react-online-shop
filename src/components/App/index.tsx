import React from 'react'
import Layout from '../Layout'
import { BrowserRouter } from 'react-router-dom'
import useStyles from '../../config/theme'

const App = () => {
  useStyles()

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
