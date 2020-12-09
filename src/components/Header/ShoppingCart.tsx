import React, { FC } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { ReducerProduct } from '../../types/ReducerProduct'
import * as actionTypes from '../../store/Actions'
import { cartProductDetail } from '../../types/ReducerProduct'

import useStyles from './styles'

interface Props {
  drawerState: boolean
  drawerTogglehandler: (action: boolean) => void
  products: cartProductDetail
  onRemove: (productID: number) => void
}

const ShoppingCart: FC<Props> = ({
  drawerState,
  drawerTogglehandler,
  products,
  onRemove,
}) => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      anchor="right"
      open={drawerState}
      onClose={drawerTogglehandler}
    >
      <p className="title">Your Items</p>
      <nav className="products-list">
        <ul>
          {products && Object.keys(products).length > 0 ? (
            Object.keys(products).map((key: any) => {
              const product = products[key]
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
                        onClick={() => onRemove(product.id)}
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
  )
}

const mapStateToProps = (state: ReducerProduct) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = (
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
