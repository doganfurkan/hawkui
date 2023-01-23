import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, children, clickfunc}) => {
  return (
    <button onClick={clickfunc} className={`${styles.koalauibuton} ${styles[type]}`}>
      {children}
    </button>
  )
}
