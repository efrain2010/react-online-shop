import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import Menu from '../Menu'

import useStyles from './styles'
import Logo from '../../assets/logo.png'

const Header = () => {
  const classes = useStyles()

  return (
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
      <Grid item xs={4}>
        <Grid container justify="flex-end" alignItems="center">
          <IconButton color="secondary" aria-label="View shopping cart">
            <ShoppingCartIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
