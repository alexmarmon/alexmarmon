import React from 'react'
import styled from 'styled-components'
import styles, { MainContainer, media } from '../styles'
import arrow from '../assets/images/arrow.svg'

const Featured = ({ data: { featured } }) => (  // eslint-disable-line
  <FeaturedStyles>
    <MainContainer>
      <div className="container">
        <div className="copy-container">
          <img className="logo" src={require(`../assets/images/${featured.logo}`)} alt="" />
          <p>{featured.copy}</p>
        </div>
        <img className="main-image" src={require(`../assets/images/${featured.image}`)} alt="" />
        <a href={featured.link} target="_blank" className="arrow-container">
          <img className="arrow" src={arrow} alt="" />
        </a>
      </div>
    </MainContainer>
  </FeaturedStyles>
)

export const query = graphql`
  fragment FeaturedFragment on DataJson { 
    featured {
      logo
      image
      copy
      link
    }
  }
`

const FeaturedStyles = styled.div.attrs({ className: 'featured-styles' })`
  width: 100vw;
  .main-container {
    max-width: 1500px;
    width: 100%;
  }

  .container {
    background-color: ${styles.secondaryBackground};
    height: 27vw;
    max-height: 445px;
    width: 85%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .copy-container {
    height: 100%;
    width: 25%;
    padding: 4% 6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img.logo {
    max-width: 122px;
    width: 8vw;
  }

  p {
    margin-top: 10%;
    max-width: 280px;
  }

  img.main-image {
    height: 80%;
  }

  .arrow-container {
    margin-left: 2%;
    height: 75%;
    width: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    img {
      transform: translateX(0px);
      transition: transform 0.3s;
    }
    &:hover {
      img {
        transform: translateX(15px);
      }
    }
  }

  ${media.largeDesktop`
    .copy-container {
      width: 31%;
    }
  `}

  ${media.desktop`
    .container {
      height: 29vw;
      width: 91%;
    }
    .arrow-container:hover img {
      transform: translateX(5px);
    }
  `}

  ${media.largePhone`
    .container {
      height: auto;
      max-height: none;
    }
    .arrow-container {
      position: absolute;
      top: 0;
      right: 0;
      width: 91%;
      height: 100%;
      margin: 0;
      img {
        display: none;
      }
    }
    .copy-container {
      width: 36%;
      height: calc(100% - 8%);
    }
    img.main-image {
      height: 170px;
    }
  `}

  ${media.phone`
    .container {
      flex-direction: column;
      padding: 30px 0px;
    }
    img.logo {
      width: 70px;
    }
    .copy-container {
      width: 85%;
      padding: 0;
      margin-bottom: 30px;
      p { max-width: none }
    }
    img.main-image {
      height: auto;
      width: 85%;
    }
  `}
`

export default Featured
