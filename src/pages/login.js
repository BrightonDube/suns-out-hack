import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button, Form } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Login = () => (
  <Layout>
    <SEO title="Login" />
    <Container>
      <Row>
        <Col className="col-xs-12, col-sm-6 m-auto py-5">
          <h1 style={{ alignContent: `center` }}>Login</h1>
          <p>Welcome back!!</p>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            <Link to="/prod">
              <Button variant="success" size="lg">
                Login
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Login
