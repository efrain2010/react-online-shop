import React, { FC } from 'react'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { ReducerProduct } from '../../types/ReducerProduct'

interface Props {
  drawerState: boolean
  count: number
  drawerTogglehandler: (drawerState: boolean) => void
}

const ShoppingIcon: FC<Props> = ({
  drawerState,
  count,
  drawerTogglehandler,
}) => {
  return (
    <IconButton
      onClick={() => drawerTogglehandler(!drawerState)}
      color="secondary"
      aria-label="View shopping cart"
    >
      <ShoppingCartIcon />
      <span className="quantity">{count}</span>
    </IconButton>
  )
}

const mapStateToProps = (state: ReducerProduct) => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(ShoppingIcon)
