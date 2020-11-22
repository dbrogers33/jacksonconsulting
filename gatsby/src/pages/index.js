import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import Img from "gatsby-image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import CTA from "../components/cta"
import Button from '../components/Button'
import LogoSlider from '../components/LogoSlider'

const Referrals = styled.div`
  background: var(--gray);
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 0;
    h3 {
      text-align: center;
    }
  }
`
const About = styled.div`
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3.5rem 0;
    @media only screen and (min-width: 650px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
  }
  .vertical-center {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
`
const Services = styled.div`
  background: var(--gray);
  text-align: center;
  .container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 0;
  }
  h2 {
    max-width: 620px;
    margin: 0 auto;
  }
  h4 {
    color: var(--dark-gray);
    letter-spacing: .5rem;
  }
  span {
    color: var(--green);
  }
  .grid {
    margin: 2rem 0 5rem 0;
    @media only screen and (min-width: 650px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 2rem;
    }
  }
  .card {
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    background: white;
    padding: 1rem 3rem 4rem 3rem;
    position: relative;
    @media only screen and (max-width: 650px) {
      margin: 4rem 0;
    }
  }
  .round-button {
    background: var(--green);
    color: white;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
    margin-left: auto;
    margin-right: auto;
    p {
      color: var(--blue);
    }
  }
  .vertical-center {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
`
const Team = styled.div`
  text-align: center;
  .container {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    padding: 3.5rem 0;
    h2 {
      max-width: 620px;
      margin: 0 auto;
    }
    h4 {
      color: var(--dark-gray);
      letter-spacing: .5rem;
    }
  }
  .cta-container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
  }
`

const StyledLink = styled(Link)`
  color: var(--green);
  transition: ease .2s;
  &:hover {
    color: var(--dark-green);
  }
`

const IndexPage = ({ data }) => (
  <>
    <Hero headline="safety consulting done the right way." image={data.justin.childImageSharp.fluid}><Button link="/hire-us/">Hire Us</Button></Hero>

    <Referrals>
      <div className="container">
        <h3>clients that trust us</h3>
        <LogoSlider />
      </div>
    </Referrals>

    <About>
      <div className="container">
        <div>
          <Img fluid={data.about.childImageSharp.fluid} />
        </div>
        <div className="vertical-center">
          <h2>Why choose jackson consulting firm for your safety consultant?</h2>
          <p>Jackson Consulting Firm serves companies of all sizes, in varioius industries to provide a professionally tailored solution to achieve safety success with a proactive safety culture. Our firrm can serve companies needing assistance from creating an entire program as a start-up or to assist with a specfic task for an existing company that needs a professional solution. All of our servicecs are professionally taileored to each client to ensure the client recieves the true assistance they are needing without overselling. At Jackson Consulting Firm we value our client relationship by making sure your success is our end goal.</p>
        </div>
      </div>
    </About>

    <Services>
      <div className="container">
        <h4>Featured Services</h4>
        <h2>For your very specific industry, we have <span className="green">highly-tailored safety solutions</span></h2>
        <div className="grid">
          <div className="card">
            <h3>OSHA 30 Hour Certificate</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="round-button vertical-center">
              <p>G</p>
            </div>
          </div>
          <div className="card">
            <h3>OSHA 30 Hour Certificate</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="round-button vertical-center">
              <p>G</p>
            </div>
          </div>
          <div className="card"> 
            <h3>OSHA 30 Hour Certificate</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="round-button vertical-center">
              <p>G</p>
            </div>
          </div>
        </div>
        <h3>That’s not all we do. Take a look at all <StyledLink to="/services/">services that we offer.</StyledLink></h3>
      </div>
    </Services>

    <Team>
      <div className="container">
        <h4>certified and trusted partners</h4>
        <h2>Meet the team you’ll work with</h2>
      </div>
      <div className="cta-container">
        <CTA />
      </div>
    </Team>
  </>
)

export default IndexPage

export const query = graphql`
  query {
    justin: file(relativePath: { eq: "justin-hero.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`