import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer } from '../styles'
import Header from './header'

const About = ({ data: { copy } }) => (
  <AboutStyles>
    <MainContainer>
      <Header copy="About" type="dark" />
      <p dangerouslySetInnerHTML={{ __html: copy }} />
    </MainContainer>
  </AboutStyles>
)

export const query = graphql`
  fragment IndexAboutFragment on DataJson { 
    copy
  }
`

const AboutStyles = styled.div.attrs({ className: 'about-styles' })`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${styles.mediumSpace};

  h1 {
    align-self: flex-start;
  }

  p {
    margin: ${styles.smallSpace} 0px;
    width: 90%;
  }
`

export default About
