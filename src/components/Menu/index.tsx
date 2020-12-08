import React from 'react'
import { NavLink } from 'react-router-dom'

import useStyles from './styles'

const Menu = () => {
  const useStyleClasses = useStyles()

  const classes = [useStyleClasses.root, 'inline-list']

  const links = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: 'category/women',
      text: 'Women',
    },
    {
      to: 'category/men',
      text: 'Men',
    },
    {
      to: 'category/the-gift-shop',
      text: 'The Gift Shop',
    },
    {
      to: 'category/monogram',
      text: 'Monogram',
    },
  ]

  return (
    <nav className={classes.join(' ')}>
      <ul>
        {links.map((elem, index) => (
          <li key={`menu-option-${index}`}>
            <NavLink activeClassName="active" to={elem.to}>
              {elem.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
