import { useState, useEffect } from 'react'

const useAyncsLoader = (requestFN: Function) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    let canceled: boolean = false

    requestFN()
      .then((data: React.SetStateAction<null>) => !canceled && setValue(data))
      .catch((error: React.SetStateAction<null>) => setValue(error))

    return () => {
      canceled = true
    }
  }, [requestFN])

  return value
}

export default useAyncsLoader
