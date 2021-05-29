import React, { useState } from 'react'
import { useMainContext } from '../../context/MainContext';
import styles from './Footer.module.scss'

const Footer = () => {

  const {
    currentMousePosition
  } = useMainContext();

  const [currentDate, setCurrentDate] = useState(new Date());

  return(
    <div
      onMouseMove={(e) => console.log(e)}
      className={styles.main}
    >
      <div className={styles.one}>
        Copyright {currentDate.getFullYear()}
      </div>
      <div className={styles.two}>
        <span>
          <span>Mouse Coordinates: (</span>
          <span>{currentMousePosition && currentMousePosition.x},</span>
          <span>{currentMousePosition && currentMousePosition.y})</span>
        </span>
      </div>
    </div>
  )
}

export default Footer