import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer, media } from '../styles'

const Header = ({ copy, type }) => (
  <HeaderStyles>
    <MainContainer>
      <h1 className={type}>{copy}</h1>
      <div className="top-line" />
      <div className="bottom-line" />
    </MainContainer>
  </HeaderStyles>
)

const HeaderStyles = styled.div.attrs({ className: 'header-styles' })`
  width: 100vw;
  position: relative;

  h1 {
    align-self: flex-start;
  }

  .top-line, .bottom-line {
    height: 1px;
    background-color: ${styles.darkFont};
    position: absolute;
  }

  .top-line {
    width: 60%;
    top: 30px;
    left: 30%;
  }
  
  .bottom-line {
    width: 45%;
    top: 40px;
    left: 50%;
  }

  ${media.desktop`
    .top-line { top: 27px; }
    .bottom-line { top: 37px; }
  `}
  ${media.tablet`
    .top-line { top: 25px; }
    .bottom-line { top: 35px; }
  `}
  ${media.largePhone`
    .top-line { top: 20px; }
    .bottom-line { top: 30px; }
  `}
  ${media.phone`
    .top-line { width: 47%; left: 43%; }
    .bottom-line { width: 32%; left: 63%; }
  `}
`

export default Header
