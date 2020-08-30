import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button, Form } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SignUp = () => (
  <Layout>
    <SEO title="SignUp" />

    <Container>
      <Row>
        <Col className="col-xs-12, col-sm-6 m-auto py-5">
          <h1 style={{ alignContent: `center` }}>SignUp</h1>
          <p>Hello there! Seems you're new to this! Let me help you!</p>
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

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Link to="/prod/">
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SignUp
