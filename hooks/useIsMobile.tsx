import {useEffect, useState} from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 620) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(() => {
    handleResize()
  },[])

  return isMobile
}
