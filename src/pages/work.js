import React from 'react'
import styled from 'styled-components'
import styles, { media } from '../styles'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Featured from '../components/featured'
import Footer from '../components/footer'

const WorkPage = ({ data: { featured, footer } }) => (
  <WorkPageStyles>
    <div className="navigation-container">
      <Navigation where="home" />
    </div>
    <div className="header-container">
      <Header copy="Work" type="dark" />
    </div>
    <Featured data={featured.edges[0].node} />
    <Footer data={footer.edges[0].node} />
  </WorkPageStyles>
)

export const query = graphql`
  query WorkQuery {
    featured: allDataJson(filter: { name: { eq: "work" } }) {
      edges {
        node {
          ...FeaturedFragment
        }
      }
    }
    footer: allDataJson(filter: { name: { eq: "about" } }) {
      edges {
        node {
          ...FooterFragment
        }
      }
    }
  }
`

const WorkPageStyles = styled.div`
  width: 100vw;

  .navigation-container {
    text-align: center;
    margin: ${styles.smallSpace}px 0px;
  }

  .header-container {
    margin: ${styles.largeSpace}px 0px;
  }

  ${media.tablet`
    .navigation-container {
      margin: ${styles.smallSpace / 2}px 0;
    }
    .header-container {
      margin: ${styles.largeSpace / 2}px 0;
    }
  `}
`

export default WorkPage
