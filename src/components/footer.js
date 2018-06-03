import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer } from '../styles'
import githubImg from '../assets/images/github.svg'
import linkedinImg from '../assets/images/linkedin.svg'

const Footer = ({ data: { email, github, linkedin } }) => (
  <FooterStyles>
    <MainContainer>
      <a href={github} target="_blank"><img src={githubImg} alt="github" className="github" /></a>
      <a href={`mailto:${email}`}><p>{email}</p></a>
      <a href={linkedin} target="_blank"><img src={linkedinImg} alt="linkedin" className="linkedin" /></a>
    </MainContainer>
  </FooterStyles>
)

export const query = graphql`
  fragment FooterFragment on DataJson { 
    email
    github
    linkedin
  }
`

const FooterStyles = styled.div.attrs({ className: 'footer-styles' })`
  width: 100vw;
  position: relative;
  margin: ${styles.mediumSpace} 0px;

  .main-container {
    flex-direction: row;
  }

  p {
    font-size: 18px;
  }

  a {
    margin: 0 30px;
  }

  .github, .linkedin {
    height: 25px;
  }
`

export default Footer
