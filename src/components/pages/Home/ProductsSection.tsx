import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { Product } from '../../../types/Product'
import { ReducerProduct } from '../../../types/ReducerProduct'
import useProductsLoader from '../../../api/useProductsLoader'

import * as actionTypes from '../../../store/Actions'

import useStyles from './styles'

const ProductsSection = (props: {
  products: Product[]
  onAddProduct: (product: Product) => ReducerProduct
}) => {
  const classes = useStyles()
  const products = useProductsLoader()
  let count: number = 1
  console.log(props.products)

  return (
    <Grid container className={classes.productsSection} spacing={6}>
      {(products as Product[]).map((prod) => {
        let size: 8 | 4 | 12 = 8

        if (count % 2 === 0) {
          size = 4
        }

        if (count % 3 === 0) {
          size = 4
        }

        if (count % 4 === 0) {
          size = 8
          count = 0
        }

        count++

        if (window.innerWidth <= 768) {
          size = 12
        }

        let prodDescription: string = prod.description

        if (size === 4) {
          prodDescription = `${prodDescription.substring(0, 80)}...`
        }

        return (
          <Grid key={`featured-el-${prod.id}`} item xs={size}>
            <div className="product">
              <figure>
                <img src={prod.image} alt={prod.description} width="100%" />
              </figure>
              <h3>{prod.title}</h3>
              <p>{prodDescription}</p>
              <p>
                <small>€ {prod.price}</small>
              </p>
              <Button
                onClick={() => props.onAddProduct(prod)}
                variant="contained"
                color="secondary"
              >
                Add to Basket
              </Button>
            </div>
          </Grid>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = (state: ReducerProduct) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; product: Product }) => any
) => {
  return {
    onAddProduct: (product: Product) =>
      dispatch({ type: actionTypes.ADD_TO_SHOPPING_CART, product: product }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection)
