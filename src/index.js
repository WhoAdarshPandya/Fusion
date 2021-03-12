/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const Button = ({text}) =>
{
  // eslint-disable-next-line prettier/prettier
  return (<h1 className={styles.test}>{text}</h1>)
}

Button.propTypes = {
  text:PropTypes.string
}
