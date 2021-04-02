/* eslint-disable prettier/prettier */
import React from 'react'
import { TextFieldPropType } from '../propTypes/ComponentPropTypes'
import './style.css'

export const TextField = ({
  value,
  variant = 'standard',
  label,
  autoComplete = false,
  color,
  onChange,
  onClick,
  type = 'text',
  disabled = false,
  readOnly = false,
  helperText = '',
  error = false,
  autoFocus = false
}) => {
  return (
    <React.Fragment>
      {(variant === '' || variant === 'standard') && (
        <div className='group'>
          <input
            className='standard-input'
            type={type}
            value={value}
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            required
            onChange={(e) => onChange && onChange(e)}
            onClick={(e) => onClick && onClick(e)}
          />
          {/* eslint-disable-next-line react/self-closing-comp */}
          <span
            className={`${
              error ? 'standard-input-bar-err' : 'standard-input-bar'
            }`}
          ></span>
          <label
            className={`${
              error ? 'standard-input-label-err' : 'standard-input-label'
            }`}
          >
            {label}
          </label>
          {helperText && (
            <label className={`hepler-text ${error ? 'error-color' : ''}`}>
              {helperText}
            </label>
          )}
        </div>
      )}
      {variant === 'filled' && (
        <div className='group'>
          <input
            className='filled-input'
            type={type}
            value={value}
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            required
            onChange={(e) => onChange && onChange(e)}
            onClick={(e) => onClick && onClick(e)}
          />
          {/* eslint-disable-next-line react/self-closing-comp */}
          <span
            className={error ? 'filled-input-bar-err' : 'filled-input-bar'}
          ></span>
          <label
            className={error ? 'filled-input-label-err' : 'filled-input-label'}
          >
            {label}
          </label>
          {helperText && (
            <label className={`helper-text p-10 ${error ? 'error-color' : ''}`}>
              {helperText}
            </label>
          )}
        </div>
      )}
      {variant === 'outlined' && (
        <div className='group'>
          <input
            className={error ? 'outlined-input-err' : 'outlined-input'}
            type={type}
            value={value}
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            required
            onChange={(e) => onChange && onChange(e)}
            onClick={(e) => onClick && onClick(e)}
          />
          <label className={error ? 'outlined-label-err' : 'outlined-label'}>
            {label}
          </label>
          {helperText && (
            <label className={`${error ? 'error-color' : ''} p-15`}>
              {helperText}
            </label>
          )}
        </div>
      )}
    </React.Fragment>
  )
}

TextField.propTypes = TextFieldPropType
