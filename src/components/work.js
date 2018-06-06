import React from 'react'
import styled from 'styled-components'
import styles, { media } from '../styles'
import arrow from '../assets/images/arrow.svg'
import arrowWhite from '../assets/images/arrow-white.svg'

class Work extends React.Component {
  setupAnimation = () => {
    this.timeline = new window.TimelineLite({ paused: true })
      .to(this.image, 0.3, { autoAlpha: 0, rotation: 0.1 }, 0)
      .to(this.logo, 0.3, { autoAlpha: 0, rotation: 0.1 }, 0)  // eslint-disable-line
      .to(this.hoverContainer, 0.3, { autoAlpha: 1, rotation: 0.1 }, 0.3)
  }

  animate = (play) => {
    if (play && this.timeline) {
      this.timeline.play()
    } else if (this.timeline) {
      this.timeline.reverse()
    } else if (window.TimelineLite) {
      this.setupAnimation()
      this.animate(true)
    }
  }

  clicked = () => {
    if (this.timeline) {
      if (this.timeline.progress() === 1) {
        this.animate()
      } else {
        this.tapIcon.classList.add('hidden')
        this.animate(true)
      }
    } else {
      this.tapIcon.classList.add('hidden')
      this.animate(true)
    }
  }

  render = () => (
    <WorkStyles
      className={this.props.data.name}
      gradientTop={this.props.data.gradientTop}
      gradientBottom={this.props.data.gradientBottom}
      fontColor={this.props.data.fontColor}
      onMouseEnter={() => this.animate(true)}
      onMouseLeave={() => this.animate()}
      onClick={() => this.clicked()}
    >
      <img className="image" ref={(el) => { this.image = el }} src={require(`../assets/images/${this.props.data.image}`)} alt="" />
      <img className="logo" ref={(el) => { this.logo = el }} src={require(`../assets/images/${this.props.data.logo}`)} alt="" />
      <div className="hover-container" ref={(el) => { this.hoverContainer = el }}>
        <img className="logo-small" src={require(`../assets/images/${this.props.data.logo}`)} alt="" />
        <p dangerouslySetInnerHTML={{ __html: this.props.data.copy }} ref={(el) => { this.copy = el }} className="copy" />
        {this.props.data.link ? (
          <a className="arrow-container" href={this.props.data.link} target="_blank">
            <img src={this.props.data.fontColor === '#FFFFFF' ? arrowWhite : arrow} alt="" />
          </a>
        ) : null}
      </div>
      <img className="mobile-tap-icon" ref={(el) => { this.tapIcon = el }} src={require('../assets/images/tap-icon.svg')} alt="" />
    </WorkStyles>
  )
}

export const query = graphql`
  fragment WorkFragment on DataJson { 
    work {
      name
      logo
      image
      copy
      gradientTop
      gradientBottom
      fontColor
      link
    }
  }
`

const WorkStyles = styled.div.attrs({ className: 'work-styles' })`
  width: 50%;
  height: 45vw;
  max-height: 680px;
  background: linear-gradient(to bottom, ${props => props.gradientTop} 0%, ${props => props.gradientBottom} 100%);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    max-height: 50%;
  }
  &.uber, &.lays { .logo { max-width: 35%; } }

  .image {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.14;
  }
  &.uber .image, &.ledgers .image {
    bottom: 0;
    top: auto;
    opacity: 1;
    transform: translate(-50%, 0);
  }

  .hover-container {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    padding: 20%;
    opacity: 0;
  }

  .logo-small {
    max-width: 50%;
    max-height: 50%;
  }
  &.uber, &.lays { .logo-small { max-width: 35%; max-height: 35%; } }

  .copy { 
    margin-top: 30px;
    ${''}
    width: 100%;
    color: ${props => props.fontColor};
  }

  .arrow-container {
    display: block;
    margin-top: 30px;
    img {
      transform: translateX(0);
      transition: all 0.3s;
    }
    &:hover {
      img {
        transform: translateX(15px);
      }
    }
  }

  .mobile-tap-icon {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;

    &.hidden {
      opacity: 0;
    }
  }

  ${media.largePhone`
    .hover-container {
      padding: 5%;
    }

    .arrow-container, .copy {
      margin-top: 15px;
    }

    &.brand-content .logo-small {
      max-width: 70%;
    }
  `}

  ${media.phone`
    width: 100%;
    height: 95vw;

    .mobile-tap-icon {
      opacity: 0.75;
      visibility: visible;
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 30px;
    }
  `}
`

export default Work
