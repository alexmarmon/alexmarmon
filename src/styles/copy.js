import styled, { injectGlobal } from 'styled-components'
import variables from './variables'
import { media } from './mixins'

injectGlobal`
  h1, h3, p {
    margin: 0;
    padding: 0;
    &.light {
      color: ${variables.lightFont}
    }
    &.dark {
      color: ${variables.darkFont}
    }
  }
  
  h1 {
    font-size: 64px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;

    ${media.desktop`
      font-size: 56px;
    `}
    ${media.tablet`
      font-size: 48px;
    `}
    ${media.largePhone`
      font-size: 40px;
    `}
  }

  h3 {
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    ${media.desktop`
      font-size: 18px;
    `}
    ${media.tablet`
      font-size: 16px;
    `}
  }

  p {
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    ${media.desktop`
      font-size: 18px;
    `}
    ${media.tablet`
      font-size: 16px;
    `}
  }

  a {
    color: ${variables.darkFont};
    text-decoration: none;
  }
`
