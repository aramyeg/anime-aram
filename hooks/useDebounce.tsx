import React, {useEffect} from 'react'

export default function useDebounce(value: string , delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      return () => {
        clearTimeout(handler)
      }
    },
    [value],
  )

  return debouncedValue
}
