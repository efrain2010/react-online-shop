import { useCallback } from 'react'
import axios from 'axios'
import useAsyncLoader from './useAyncsLoader'

import { Product } from '../types/Product'

const useProductsLoader = (): [] | Product[] => {
  const products = useAsyncLoader(
    useCallback(
      () =>
        axios
          .get('https://fakestoreapi.com/products')
          .then((data) => data.data),
      []
    )
  )

  return products !== null ? products : []
}

export default useProductsLoader
