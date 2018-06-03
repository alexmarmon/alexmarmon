import styled from 'styled-components'
import variables from './variables'
import mixins from './mixins'

const MainContainer = styled.div.attrs({ className: 'main-container' })`
  width: 1050px;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;


  ${mixins.media.tablet`
    max-width: 90%;
  `}
`

export default {
  MainContainer
}
