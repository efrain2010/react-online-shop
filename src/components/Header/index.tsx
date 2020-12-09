import React, { FC, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Menu from '../Menu'
import ShoppingCart from './ShoppingCart'
import User from './User'
import ShoppingIcon from './ShoppingIcon'

import useStyles from './styles'
import Logo from '../../assets/logo.png'

const Header: FC = () => {
  const [drawerState, setDrawerState] = useState(false)
  const classes = useStyles()

  const drawerTogglehandler = (action: boolean): void => {
    setDrawerState(action)
  }

  return (
    <>
      <Grid component="header" container className={classes.root}>
        <Grid item xs={4}>
          <Grid container alignItems="center">
            <Menu />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="center" alignItems="center">
            <img className={classes.logo} src={Logo} alt="Online Logo" />
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.cartBtn}>
          <Grid container justify="flex-end" alignItems="center">
            <User />
            <ShoppingIcon
              drawerState={drawerState}
              drawerTogglehandler={drawerTogglehandler}
            />
          </Grid>
        </Grid>
      </Grid>
      <ShoppingCart
        drawerState={drawerState}
        drawerTogglehandler={() => drawerTogglehandler(false)}
      />
    </>
  )
}

export default Header
