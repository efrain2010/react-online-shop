import React from 'react'
import { Route } from 'react-router'

import Home from '../pages/Home'

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  )
}

export default Routes
