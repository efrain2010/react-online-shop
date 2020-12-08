import React from 'react'

import Grid from '@material-ui/core/Grid'

import HeroImg from '../../../assets/hero.jpg'

import useStyles from './styles'

const HeroSection = () => {
  const classes = useStyles()

  return (
    <Grid
      className={[classes.heroSection, 'bg-img'].join(' ')}
      style={{ backgroundImage: `url(${HeroImg})` }}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <h2>THE GIFT SHOP</h2>
        <p>
          This Christmas, we're in a season of simplification, but we're
          determined to make simple as special as ever. Get ahead with our most
          comprehensive gift guide, and shop by Category or Price, curated for
          everybody on your list.
        </p>
      </Grid>
    </Grid>
  )
}

export default HeroSection
