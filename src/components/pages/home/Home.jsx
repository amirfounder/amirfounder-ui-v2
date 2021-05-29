import React from 'react';
import Heading from '../../wrappers/heading/Heading';
import Page from '../../wrappers/page/Page';
import styles from './Home.module.scss'

const Home = () => {
  return(
    <Page>
      <Heading level="3">
        Hello World.
      </Heading>
    </Page>
  )
}

export default Home;
