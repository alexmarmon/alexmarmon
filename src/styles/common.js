import styled from 'styled-components'
import variables from './variables'

const MainContainer = styled.div.attrs({ className: 'main-container' })`
  width: 1050px;
  max-width: 90%;
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
