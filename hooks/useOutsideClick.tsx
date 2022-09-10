import * as React from 'react'

const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: (event: MouseEvent | TouchEvent) => void) => {

  const listener = (event: MouseEvent) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return
    }

    callback(event)
  }

  React.useEffect(
    () => {
      !!ref.current && document.addEventListener('mousedown', listener)
      !!ref.current && document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, callback],
  )
}

export default useOutsideClick