import { mount as marketingMount } from 'marketing/MarketingApp'
import { useRef, useEffect } from 'react'

const MarketingApp = () => {
  const el = useRef(null)
  useEffect(() => {
    marketingMount(el.current)
  }, [])
  return (
    <div id="marketing-section" ref={el}>
    </div>
  )
}
export default MarketingApp