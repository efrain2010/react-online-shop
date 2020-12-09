import React, { useState } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Drawer from '@material-ui/core/Drawer'
import DeleteIcon from '@material-ui/icons/Delete'

import { ReducerProduct } from '../../types/ReducerProduct'
import * as actionTypes from '../../store/Actions'

import Menu from '../Menu'

import useStyles from './styles'
import Logo from '../../assets/logo.png'
import { Product } from '../../types/Product'

const Header = (props: any) => {
  const [drawerState, setDrawerState] = useState(false)
  const classes = useStyles()

  const drawerTogglehandler = (action: boolean) => {
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
            <IconButton
              onClick={() => drawerTogglehandler(!drawerState)}
              color="secondary"
              aria-label="View shopping cart"
            >
              <ShoppingCartIcon />
              <span className="quantity">{props.count}</span>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={drawerState}
        onClose={() => drawerTogglehandler(false)}
      >
        <p className="title">Your Items</p>
        <nav className="products-list">
          <ul>
            {Object.keys(props.products).length > 0 ? (
              Object.keys(props.products as Product[]).map((key) => {
                const product = props.products[key]
                return (
                  <li key={`cart-list-${product.id}`}>
                    <Grid container>
                      <Grid item xs={3}>
                        <figure>
                          <img
                            src={product.data.image}
                            alt={product.data.title}
                          />
                        </figure>
                      </Grid>
                      <Grid item xs={7}>
                        {product.data.title} X {product.quantity}
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton
                          onClick={() => props.onRemove(product.id)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </li>
                )
              })
            ) : (
              <p className="text-center">You have not added a product</p>
            )}
          </ul>
        </nav>
      </Drawer>
    </>
  )
}

const stateToProps = (state: ReducerProduct) => {
  return {
    products: state.products,
    count: state.count,
  }
}

const dispatchToProps = (
  dispatch: (arg0: { type: string; productID: number }) => any
) => {
  return {
    onRemove: (productID: number) =>
      dispatch({
        type: actionTypes.REMOVE_FROM_SHOPPING_CART,
        productID: productID,
      }),
  }
}

export default connect(stateToProps, dispatchToProps)(Header)
