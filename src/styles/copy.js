import styled, { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  h1, p {
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
  }

  p {
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }
`
