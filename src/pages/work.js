import React from 'react'
import styled from 'styled-components'
import styles, { MainContainer, media } from '../styles'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Featured from '../components/featured'
import Work from '../components/work'
import Footer from '../components/footer'

const WorkPage = ({ data: { featured, footer, work } }) => (
  <WorkPageStyles>
    <div className="navigation-container">
      <Navigation where="home" />
    </div>
    <div className="header-container">
      <Header copy="Work" type="dark" />
    </div>
    <Featured data={featured.edges[0].node} />
    <div className="work-container">
      <MainContainer>
        {work.edges[0].node.work.map(workItem => (
          <Work key={workItem.name} data={workItem} />
        ))}
      </MainContainer>
    </div>
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
    work: allDataJson(filter: { name: { eq: "work" } }) {
      edges { 
        node {
          ...WorkFragment
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

  .work-container {
    margin-top: ${styles.largeSpace}px;
    .main-container {
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 1500px;
      width: 100%;
    }
  }

  ${media.tablet`
    .navigation-container {
      margin: ${styles.smallSpace / 2}px 0;
    }
    .header-container {
      margin: ${styles.largeSpace / 2}px 0;
    }
    .work-container {
      margin-top: ${styles.largeSpace / 2}px;
    }
  `}
`

export default WorkPage
