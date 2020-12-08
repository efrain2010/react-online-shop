import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Routes from '../Routes'
import Header from '../Header'

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Routes></Routes>
      </main>
    </>
  )
}

export default Layout
