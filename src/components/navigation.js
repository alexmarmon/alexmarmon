import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import styles, { MainContainer } from '../styles'
import Me from '../assets/images/me.jpg'

class Navigation extends React.Component {
  componentDidMount() {
    // setup timelines object
    this.timelines = {
      left: { el: this.lineLeft, timeline: null, dir: 1 },
      right: { el: this.lineRight, timeline: null, dir: -1 }
    }
    window.TimelineLite ? this.setupAnimation() : window.onload = () => this.setupAnimation()
  }

  setupAnimation() {
    const initialSlide = 70
    Object.keys(this.timelines).forEach((key) => {
      if (window.TimelineLite) {
        const el = this.timelines[key]
        el.timeline = new window.TimelineLite({ paused: true })
          .to(el.el, 0.15, { x: initialSlide * el.dir }, 0)
          .to(el.el, 0.15, { width: 0 }, 0)
      }
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
    <NavigationStyles>
      <div className="link" onMouseEnter={() => this.animateLine('left', true)} onMouseLeave={() => this.animateLine('left')}>
        <Link to={this.props.where === 'work' ? '/work' : '/'}>
          <h3>{this.props.where === 'work' ? 'My Work' : 'About Me'}</h3>
          <div ref={(el) => { this.lineLeft = el }} className="line left" />
        </Link>
      </div>
      <div className="link" onMouseEnter={() => this.animateLine('right', true)} onMouseLeave={() => this.animateLine('right')}>
        <Link to="/work">
          <h3>Resume</h3>
          <div ref={(el) => { this.lineRight = el }} className="line right" />
        </Link>
      </div>
    </NavigationStyles>
  )
}

const NavigationStyles = styled.div.attrs({ className: 'navigation-styles' })`
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

export default Navigation
