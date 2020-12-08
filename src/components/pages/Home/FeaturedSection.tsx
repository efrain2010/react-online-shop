import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { Product } from '../../../types/Product'
import useProductsLoader from '../../../api/useProductsLoader'

import useStyles from './styles'

const FeaturedSection = () => {
  const classes = useStyles()

  const products = useProductsLoader()
  let count: number = 1

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
              <Button variant="contained" color="secondary">
                Add to Basket
              </Button>
            </div>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedSection
