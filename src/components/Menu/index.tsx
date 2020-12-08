import React from 'react'
import { NavLink } from 'react-router-dom'

import useStyles from './styles'

import { productCategories } from '../../config/constants'

const Menu = () => {
  const classes = useStyles()

  return (
    <nav className={[classes.root, 'inline-list'].join(' ')}>
      <ul>
        {productCategories.map((elem) => (
          <li key={elem.id}>
            <NavLink activeClassName="active" to={elem.slug}>
              {elem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
