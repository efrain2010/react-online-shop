import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import HeroSection from './HeroSection'
import FeaturedSection from './FeaturedSection'

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <FeaturedSection />
      </Container>
    </>
  )
}

export default Home
