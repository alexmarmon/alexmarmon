import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer } from '../styles'
import Me from '../assets/images/me.jpg'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '100vh'
    }
    window.onload = () => this.setupAnimation()
  }

  componentDidMount() {
    this.setState({ height: window ? window.innerHeight : '100vh' })  // eslint-disable-line
    // setup timelines object
    this.timelines = {
      left: { el: this.lineLeft, timeline: null, dir: 1 },
      right: { el: this.lineRight, timeline: null, dir: -1 }
    }
    window.TimelineLite ? this.setupAnimation() : null
  }

  setupAnimation() {
    const initialSlide = 70
    Object.keys(this.timelines).forEach((key) => {
      const el = this.timelines[key]
      el.timeline = new window.TimelineLite({ paused: true })
        .to(el.el, 0.15, { x: initialSlide * el.dir }, 0)
        .to(el.el, 0.15, { width: 0 }, 0)
    })
  }

  animateLine = (which, play) => {
    if (play && this.timelines[which].timeline) {
      this.timelines[which].timeline.play()
    } else if (this.timelines[which].timeline) {
      this.timelines[which].timeline.reverse()
    }
  }

  render = () => (
    <LandingStyles style={{ height: this.state.height }}>
      <MainContainer>
        <h1 className="dark">Alex Marmon</h1>
        <div className="image-container">
          <img src={Me} alt="logo" />
        </div>
        <div className="backdrop" />
        <div className="links-container">
          <div className="link" onMouseEnter={() => this.animateLine('left', true)} onMouseLeave={() => this.animateLine('left')}>
            <Link to="/work">
              <h3>My Work</h3>
              <div ref={(el) => { this.lineLeft = el }} className="line left" />
            </Link>
          </div>
          <div className="link" onMouseEnter={() => this.animateLine('right', true)} onMouseLeave={() => this.animateLine('right')}>
            <Link to="/work">
              <h3>Resume</h3>
              <div ref={(el) => { this.lineRight = el }} className="line right" />
            </Link>
          </div>
        </div>
      </MainContainer>
    </LandingStyles>
  )
}

const LandingStyles = styled.div.attrs({ className: 'landing-styles' })`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    align-self: flex-start;
  }

  .image-container {
    width: 70%;
    max-height: 500px;
    height: 42.7vw;
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

  .link {
    display: inline-block;
    margin: 20px 30px;
    position: relative;
    cursor: pointer;
    .line {
      cursor: pointer;
      position: absolute;
      bottom: -2px;
      height: 1px;
      width: 55px;
      background-color: ${styles.darkFont};
      &.left {
        left: -12px;
      }
      &.right {
        right: -12px;
      }
    }
  }
`

export default Landing
