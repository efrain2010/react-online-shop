import React from 'react'
import Layout from '../Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import useStyles from '../../config/theme'

const App = () => {
  useStyles()

  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App
