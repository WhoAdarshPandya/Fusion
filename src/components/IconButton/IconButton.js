/* eslint-disable prettier/prettier */

import React,{useEffect,useState} from 'react'
import { IconButtonPropType } from '../propTypes/ComponentPropTypes'
import './style.css'

export const IconButton = (
  { 
    children,
    size="medium",
    variant='simple',
    onClick,
    color='',
    disableRipple= false 
  }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)
  
  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  return <i 
  onClick={(e) => {
        const rect = e.target.getBoundingClientRect()
        !disableRipple && setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        onClick && onClick(e)
  }}
  className={`icon-button ${color&&`${color}Text`} ${size}Icon material-icons`}>
  {isRippling ? (
        <span
          className={`ripple ${color&&`${color}Ripple`}`}
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      ) : (
        ''
      )}
  <span className="content">{children}</span>
  </i>
}

IconButton.propTypes = IconButtonPropType;

