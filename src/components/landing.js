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
  }

  componentDidMount() {
    this.setState({ height: window ? window.innerHeight : '100vh' })  // eslint-disable-line
  }

  animateLine = () => {
    console.log('animate')
  }

  render = () => (
    <LandingStyles style={{ height: this.state.height }}>
      <MainContainer>
        <h1 className="dark">Alex Marmon</h1>
        <img src={Me} alt="logo" />
        <div className="backdrop" />
        <div className="links-container">
          <div className="link" onMouseEnter={this.animateLine}>
            <Link to="/work">
              <h3>My Work</h3>
              <div className="line left" />
            </Link>
          </div>
          <div className="link" onMouseEnter={this.animateLine}>
            <Link to="/work">
              <h3>Resume</h3>
              <div className="line right" />
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
  
  img {
    width: 70%;
    align-self: flex-end;
    margin: 20px 0;
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
    margin-left: 19vw;
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
