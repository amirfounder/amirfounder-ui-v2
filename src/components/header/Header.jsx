import React from 'react';
import { useHistory } from 'react-router';
import PathConstants from '../../utils/PathsConstants';
import styles from './Header.module.scss'

const Header = () => {

  const history = useHistory()

  const handleRedirect = (url) => {
    history.push(url)
  }

  const projectsClick = () => handleRedirect(PathConstants.PROJECTS)
  const logoClick = () => handleRedirect(PathConstants.HOME);

  return(
    <div className={styles.main}>
      <div className={styles.one}>
      <span
          className={styles.link}
          onClick={logoClick}
        >
          Amir Sharapov
        </span>
      </div>
      <div className={styles.two}>
        <span
          className={styles.link}
          onClick={projectsClick}
        >
          Projects
        </span>
      </div>
    </div>
  )
}

export default Header
