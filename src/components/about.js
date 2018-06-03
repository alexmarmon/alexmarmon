import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer, media } from '../styles'
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
  margin-top: ${styles.mediumSpace}px;

  h1 {
    align-self: flex-start;
  }

  p {
    margin: ${styles.smallSpace}px 0px;
    width: 90%;
  }

  ${media.tablet`
    margin-top: ${styles.mediumSpace / 2}px;
  `}

  ${media.largePhone`
    margin-top: ${styles.mediumSpace / 3}px;  
  `}
`

export default About
