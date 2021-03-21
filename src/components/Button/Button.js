/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { ButtonPropType } from '../propTypes/ComponentPropTypes'
import './style.css'

export const Button = ({
  color = 'primary',
  textColor = 'textColorWhite',
  children,
  onClick,
  disableRipple = false,
  raised = false,
  size = 'medium',
  href = '',
  variant = 'contained',
  startIcon = '',
  endIcon = ''
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

  return (
    <button
      className={`ripple-button ${color} ${textColor} ${
        raised && 'raised'
      } ${size} ${variant === 'outlined' && `${color}Outlined`}`}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect()
        !disableRipple &&
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        onClick && onClick(e)
      }}
    >
      {isRippling ? (
        <span
          className={`ripple ${textColor + 'Ripple'}`}
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      ) : (
        ''
      )}
      <span className='content'>
        {href ? (
          <a
            href={href}
            target={!href.startsWith('#') ? '_blank' : ''}
            rel='noreferrer'
          >
            {children}
          </a>
        ) : ( 
          <React.Fragment>
            {!startIcon && !endIcon && children}
            {startIcon && !endIcon && <div className="dan-text"><i className="material-icons">{startIcon}</i><span className="btn-text">{children}</span></div>}
            {endIcon && !startIcon && <div className="dan-text"><span className="btn-text">{children}</span><i className="material-icons">{endIcon}</i></div>}
            {startIcon && endIcon && <div className="dan-text"><i className="material-icons">{startIcon}</i><span className="btn-text">{children}</span><i className="material-icons">{endIcon}</i></div> }
          </React.Fragment>
        )} 
      </span>
    </button>
  )
}

Button.propTypes = ButtonPropType
