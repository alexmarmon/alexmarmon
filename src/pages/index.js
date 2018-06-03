import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import Landing from '../components/landing'
import About from '../components/about'

const HomePage = () => (
  <div>
    <Landing />
    <About />
  </div>
)


const HomePageStyles = styled.div`
  width: 100vw;
`

export default HomePage
