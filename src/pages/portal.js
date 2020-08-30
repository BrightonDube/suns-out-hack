import React from "react"
import { Link } from "gatsby"
import { Button, Row, Container, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portal = () => (
  <Layout>
    <SEO title="Portal" />
    <Container>
      <Row>
        <Col xs={12} sm={6} className="mx-auto my-5">
          <div className="Portal">
            <h1 className="text-center">Portal</h1>
            <p>Hello there! Seems you're new to this! Let me help you!</p>
            <p>Or if you're already a user, login!</p>
            <Link to="/login">
              <Button variant="primary" size="lg" active>
                Login
              </Button>{" "}
            </Link>
            <Link to="/signup">
              <Button variant="secondary" size="lg" active>
                Signup
              </Button>{" "}
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Portal
