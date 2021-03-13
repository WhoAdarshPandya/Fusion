/* eslint-disable prettier/prettier */
import React from 'react'
import { ButtonPropType } from '../propTypes/ComponentPropTypes'
import styles from './style.module.css'

export const Button = ({text}) =>{
    return (<button className={styles.btn}>{text}</button>)
}

Button.propTypes = ButtonPropType

