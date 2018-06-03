import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer } from '../styles'

class About extends React.Component {
  render = () => (
    <AboutStyles>
      <MainContainer>
        <h1 className="dark">About</h1>
      </MainContainer>
    </AboutStyles>
  )
}

const AboutStyles = styled.div.attrs({ className: 'about-styles' })`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    align-self: flex-start;
  }
`

export default About
