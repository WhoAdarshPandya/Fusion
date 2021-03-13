/* eslint-disable prettier/prettier */
import React from 'react'
import { ToastPropType } from '../propTypes/ComponentPropTypes'
import styles from './style.module.css'

export const Toast = ({text}) =>{
    return (<p className={styles.tst}>{text}</p>)
}

Toast.propTypes = ToastPropType

