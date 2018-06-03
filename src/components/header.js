import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer } from '../styles'

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
`

export default Header
