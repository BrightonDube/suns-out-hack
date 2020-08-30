import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Row, Col, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Hero from "../components/hero"
import styled from "styled-components"

const H1 = styled.h1`
  color: #fff;
  font-size: 6rem;
  background-color: rgba(0, 0, 0, 0.7);
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col xs={12}>
        <Hero>
          <H1>The UberEats of Medication</H1>
        </Hero>
      </Col>
    </Row>

    <Row className="no-gutters py-0">
      <Col xs={12} sm={6} className="text-center align-self-center">
        <h1>We are Revolutionizing the pharmaceutical industry!</h1>
      </Col>
      <Col xs={12} sm={6}>
        <Image />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
