import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer, media } from '../styles'
import Navigation from './navigation'
import Me from '../assets/images/me.jpg'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '100vh'
    }
  }

  componentDidMount() {
    window.onscroll = this.throttle(this.runOnScroll)
    this.setState({ height: window ? window.innerHeight : '100vh' })  // eslint-disable-line
  }

  throttle = (fn) => {
    let throttle
    return () => {
      if (!throttle) {
        fn()
        throttle = true
        setTimeout(() => { throttle = false }, 300)
      }
    }
  }

  runOnScroll = () => {
    if ((this.more.getBoundingClientRect().top / window.innerHeight) < 0.65) {
      window.onscroll = null
      this.more.classList.add('hide')
    }
  }

  render = () => (
    <LandingStyles style={{ height: this.state.height }}>
      <MainContainer>
        <h1 className="dark">Alex Marmon</h1>
        <div className="image-container">
          <img src={Me} alt="" />
        </div>
        <div className="backdrop" />
        <div className="links-container">
          <Navigation where="work" />
        </div>
      </MainContainer>
      <div className="more" ref={(el) => { this.more = el }}>
        <div className="more-line" />
        <h3>more</h3>
      </div>
    </LandingStyles>
  )
}

const LandingStyles = styled.div.attrs({ className: 'landing-styles' })`
  min-height: 750px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${''}

  h1 {
    align-self: flex-start;
  }

  .image-container {
    width: 70%;
    max-height: 500px;
    height: 38.1vw;
    align-self: flex-end;
    text-align: right;
    margin: 20px 0;
  }
  
  img {
    max-height: 500px;
    width: 100%;
  }

  .backdrop {
    height: 94%;
    width: 90%;
    position: absolute;
    bottom: 0;
    background-color: ${styles.secondaryBackground};
    z-index: -1;
  }

  .links-container {
    align-self: flex-start;
    margin-left: 215px;
  }

  .more {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: rotate(-90deg) translateY(-48vw);
    transition: all 0.3s;
    opacity: 1;
    h3 {
      display: inline-block;
    }
    .more-line {
      display: inline-block;
      height: 1px;
      width: 40px;
      margin-bottom: 4px;
      margin-right: 10px;
      background-color: ${styles.darkFont};
    }
    &.hide {
      opacity: 0;
    }
  }

  ${media.largeDesktop`
    .links-container {
      margin-left: 14vw;
    }
  `}

  ${media.tablet`
    min-height: 600px;
    .image-container {
      height: 42.9vw;
    }
    .more {
      transform: rotate(-90deg);
      left: -15px;
    }
  `}

  ${media.largePhone`
    .links-container {
      margin-left: 8vw;
    }
  `}
`

export default Landing
