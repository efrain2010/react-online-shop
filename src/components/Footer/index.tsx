import React from 'react'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Grid container justify="center">
        <a
          href="https://github.com/efrain2010"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made With 💔 by Efrain Villanueva
        </a>
      </Grid>
    </footer>
  )
}

export default Footer
