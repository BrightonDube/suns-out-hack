/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Footer from "./footer"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&family=Open+Sans:wght@300&family=Roboto:wght@300&display=swap');
  * {
    margin: 0;
    padding: 0;    
  }
  body {
    font-family: 'Montserrat', 'Roboto', 'Open Sans', sans-serif;
  }
  main {
    min-height: 400px;
    
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Virtual pharmacy" },
          { name: "keywords", content: "medicine, telemedicine" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
