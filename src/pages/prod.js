import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "morning-brew-spxNkNj9gUI-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Products" />
      <Container>
        <Row>
          <Col xs={12} sm={6} className="pt-5">
            <h1>Products</h1>
            <p>
              VirtuPharm is a site which you can order medicines to arrive in
              your doorstep!
            </p>
            <p>
              To get started, first sign in or login to continue seeing
              products!
            </p>
            <p>
              P.S: We need a doctor's prescription in order to receive your
              medicines!
            </p>
          </Col>
          <Col xs={12} sm={6} className="pt-5">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Col>
        </Row>

        <Row>
          <Col className="col-xs-12, col-sm-6 m-auto py-5">
            <p>Fill this form below to get your medicines requested....</p>
            <Form>
              <Form.Group controlId="medsOrder">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Text" placeholder="Enter Your Full Name" />
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter Your Age"
                  required
                />
              </Form.Group>

              <Form.Group controlId="medsOrder">
                <Form.Label>City</Form.Label>
                <Form.Control type="Text" placeholder="Enter Your Full Name" />
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Country</Form.Label>
                <Form.Control type="Text" placeholder="Enter Your Country" />
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Medicine</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter the meds you need"
                />
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Serial Number (If applicable)</Form.Label>
                <Form.Control type="Text" placeholder="Enter Serial Number" />
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Manufacturer Name</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter the manufacturer"
                />
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>
                  Quantity: (Limited to 5 per order | 3 for class-H drugs)
                </Form.Label>
                <Form.Control as="select" id="inlineFormCustomSelect" custom>
                  <option value="0">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Three</option>
                  <option value="5">Three</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Is it class H drug?</Form.Label>
                <Form.Check type="radio" aria-label="radio 1" required /> Yes
                <Form.Check type="radio" aria-label="radio 1" required /> No
              </Form.Group>
              <Form.Group controlId="medsOrder">
                <Form.Label>Delivery Date? (Estimated)</Form.Label>

                <input
                  type="date"
                  name="del-date"
                  min="1000-01-01"
                  max="3000-12-31"
                  class="form-control"
                />
              </Form.Group>

              <p>Please check this agreement below and then continue!</p>
              <p>
                <Form.Check
                  type="checkbox"
                  label="I, understand and agree that I'm using VirtuPharm for delivery
                purposes and requesting medicines with detailed medical
                prescription."
                />
              </p>
              <p>
                WARNING: VirtuPharm isn't responsible for damage of products!
              </p>
              <Link to="/confirm">
                <Button variant="danger" size="lg">
                  Confirm and place order
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Products
