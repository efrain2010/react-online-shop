import { useCallback } from 'react'
import useAsyncLoader from './useAyncsLoader'
import axios from 'axios'

const useSingleUserLoader = (id: number) => {
  const users = useAsyncLoader(
    useCallback(() => {
      axios
        .get(`https://fakestoreapi.com/users/${id}`)
        .then((data) => data.data)
    }, [id])
  )
  return users !== null ? users : {}
}

export default useSingleUserLoader
