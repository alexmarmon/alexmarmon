import React from 'react'
import styled from 'styled-components'
import styles, { MainContainer, media } from '../styles'
import arrow from '../assets/images/arrow.svg'

const PlayButtonContainer = styled.div`
top: 50%; right: 50%;
transform: translate(50%,-50%);
  position: absolute;
  z-index: 100;
  cursor: pointer;

  ${media.largePhone`
    top: 50%;
    left: calc(50% - 29px);
  `}
`

const PlayButton = () => (
  <PlayButtonContainer onClick={() => window.open('https://vimeo.com/372983870', '_blank')}>
    <svg xmlns="http://www.w3.org/2000/svg" width={115} height={115} viewBox="0 0 115 115">
      <g fill="none" fillRule="evenodd" transform="translate(.6 .85)">
        <circle cx="57" cy="57" r="57" fill="#27BD82" />
        <circle cx="57" cy="57" r="49.4" fill="#27BD82" />
        <path
          fill="#fff"
          d="M41.8 40.364v32.96c.085 4.042 3.925 6.495 7.282 4.57L76.058 61.36c1.47-.903 2.475-2.56 2.475-4.499 0-1.94-1.005-3.596-2.475-4.499L49.082 35.83c-.839-.481-1.715-.7-2.547-.679-2.498.06-4.67 2.182-4.735 5.213z"
        />
      </g>
    </svg>
  </PlayButtonContainer>
)

const Featured = ({ data: { featured } }) => (  // eslint-disable-line
  <FeaturedStyles>
    <MainContainer>
      <div className="container">
        <div className="copy-container">
          <img className="logo" src={require(`../assets/images/${featured.logo}`)} alt="" />
          <p>{featured.copy}</p>
        </div>
        <ImageContainer>
          <img className="main-image" src={require(`../assets/images/${featured.image}`)} alt="" />
          <PlayButton />
        </ImageContainer>
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

const ImageContainer = styled.div`
  height: 80%;
  position: relative;
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
    width: 3vw;
  }

  p {
    margin-top: 10%;
    max-width: 280px;
  }

  img.main-image {
    height: 100%;
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
