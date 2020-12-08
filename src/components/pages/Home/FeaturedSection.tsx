import React from 'react'
import Grid from '@material-ui/core/Grid'

const FeaturedSection = () => {
  const list = [
    {
      img: 'https://via.placeholder.com/925x693?text=925x693+Featured+IMG',
      title: 'GIFTS FOR HER',
      description: `For the lovely Her's. The best of our newest arrivals, selected just for you.`,
    },
    {
      img: 'https://via.placeholder.com/464x589?text=464x589+Featured+IMG',
      title: 'GIFTS FOR HIM',
      description: `Play it cool with our curated summer essentials for all the men in your world.`,
    },
    {
      img: 'https://via.placeholder.com/464x589?text=464x589+Featured+IMG',
      title: 'GIFTS FOR DAD',
      description: `Play it cool with our curated summer essentials for all the men in your world.`,
    },
    {
      img: 'https://via.placeholder.com/925x693?text=925x693+Featured+IMG',
      title: 'GIFTS FOR MUM',
      description: `For the lovely Her's. The best of our newest arrivals, selected just for you.`,
    },
  ]

  return (
    <Grid container>
      {list.map((elem, index) => {
        let size: 8 | 4 | 12 = 8

        if ((index + 1) % 2 === 0) {
          size = 4
        }

        if ((index + 1) % 3 === 0) {
          size = 4
        }

        if ((index + 1) % 4 === 0) {
          size = 8
        }

        if (window.innerWidth <= 950) {
          size = 12
        }

        return (
          <Grid key={`featured-el-${index}`} item xs={size}>
            <figure>
              <img src={elem.img} alt={elem.title} width="100%" />
              <h3>{elem.title}</h3>
              <p>{elem.description}</p>
            </figure>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedSection
