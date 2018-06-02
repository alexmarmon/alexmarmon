import styled from 'styled-components'
import variables from './variables'

const MainContainer = styled.div.attrs({ className: 'main-container' })`
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default {
  MainContainer
}
