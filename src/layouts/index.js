import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../assets/favicon.svg'
// import Logo from '../assets/images/lofty-logo.svg'

const TemplateWrapper = ({ children, data }) => {
  const meta = data.site.siteMetadata
  return (
    <div className="app">
      <Helmet
        title={meta.title}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
          { property: 'og:url', content: meta.url },
          { property: 'og:type', content: meta.type },
          { property: 'og:title', content: meta.title },
          { property: 'og:description', content: meta.description },
          { name: 'google-site-verification', content: 'eX89TsomVRsLsKoDvNrtrgQyKIr45Kl1EetT2iIHEU4' },
          { name: 'google-site-verification', content: 'Hzmhdm5npEY9ai1K5Ngosy5_0TA8xx3V0_tabQshj7w' }
          // { property: 'og:image', content: `https://www.alexmarmon.com${Logo}` }
        ]}
        link={[
          { rel: 'icon', href: favicon, type: 'image/x-icon' }
        ]}
        script={[
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenLite.min.js' },
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TimelineLite.min.js' },
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/easing/EasePack.min.js' },
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/CSSPlugin.min.js' }
        ]}
      />
      <div className="main-container">
        { children() }
      </div>
    </div>
  )
}


export const query = graphql`
  query MetaQuery {
    site {
      siteMetadata {
        title,
        description,
        keywords,
        url,
        type
      }
    }
  }
`

export default TemplateWrapper
