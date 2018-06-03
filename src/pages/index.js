import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import Landing from '../components/landing'
import About from '../components/about'
import Footer from '../components/footer'

const HomePage = ({ data: { about, footer } }) => (
  <div>
    <Landing />
    <About data={about.edges[0].node} />
    <Footer data={footer.edges[0].node} />
  </div>
)

export const query = graphql`
  query IndexQuery {
    about: allDataJson(filter: { name: { eq: "about" } }) {
      edges {
        node {
          ...IndexAboutFragment
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

const HomePageStyles = styled.div`
  width: 100vw;
`

export default HomePage
