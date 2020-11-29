import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import Img from "gatsby-image/withIEPolyfill" //<-- IE polyfill
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
      grid-auto-rows: 1fr;
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
    transition: ease .3s; 
    @media only screen and (max-width: 650px) {
      margin: 4rem 0;
    }
    &:hover {
      box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.15);
      margin-top: -3px;
      margin-bottom: 3px;
      .round-button {
        box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.05);
        width: 4.75rem;
        height: 4.75rem;
      }
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
    transition: ease .3s;
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
const TeamMembers = styled.div`
  @media only screen and (min-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .image {
    border-radius: .5rem;
  }
  .card {
    @media only screen and (min-width: 650px) {
      width: 40%;
    }
    width: 100%;
    margin: 3rem 0 0 0;
    position: relative;
    border-radius: .5rem;
    &:hover {
      cursor: pointer;
      h3 {
        bottom: 50%;
      }
      .gradient {
        background: rgba(23, 56, 67, 0.75);
      }
      p {
        opacity: 100%;
      }
    }
  }
  .gradient {
    border-radius: .5rem;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 54.7%, #173843 100%);
    transition: ease .5s;
  }
  h3 {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transition: ease .5s;
  }
  p {
    font-size: .75rem;
    position: absolute;
    bottom: 45%;
    z-index: 2;
    color: white;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transition: ease .5s;
    transition-delay: .5s;
    opacity: 0;
  }
`
const CardLink = styled(Link)`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 5;
`

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Providing a Better Safety Culture"
      description="Jackson Consulting Firm serves companies of all sizes, in varioius industries to provide a professionally tailored solution to achieve safety success with a proactive safety culture. Our firrm can serve companies needing assistance from creating an entire program as a start-up or to assist with a specfic task for an existing company that needs a professional solution. All of our servicecs are professionally taileored to each client to ensure the client recieves the true assistance they are needing without overselling. At Jackson Consulting Firm we value our client relationship by making sure your success is our end goal."
    />
      <Hero 
        headline="safety consulting done the right way." 
        copy="“We go the extra effort to make sure that your company is not only meeting government regulations but develop a custom plan so your team can manage themselves.” - Justin Jackson" 
        image={data.justin.childImageSharp.fluid}>
        <Button link="/hire-us/">Hire Us</Button>
      </Hero>

    <Referrals>
      <div className="container">
        <h3>clients that trust us</h3>
        <LogoSlider />
      </div>
    </Referrals>

    <About>
      <div className="container">
        <div>
          <Img fluid={data.about.childImageSharp.fluid} alt="" />
        </div>
        <div className="vertical-center">
          <h2>Why choose jackson consulting firm for your safety consultant?</h2>
          <p>Jackson Consulting Firm serves companies of all sizes in various industries to provide a professionally tailored solution to achieve safety success with a proactive safety culture. Our firm serves companies needing assistance in creating an entire program as a start-up or with a specific task for an existing company that needs a professional solution. All of our services are professionally tailored to each client to ensure the client receives the assistance they are needing without overselling. At Jackson Consulting Firm, we value our client relationship by making sure your success is our end goal.</p>
        </div>
      </div>
    </About>

    <Services>
      <div className="container">
        <h4>Featured Services</h4>
        <h2>For your very specific industry, we have <span className="green">highly-tailored safety solutions</span></h2>
        <div className="grid">
          
            <div className="card">
            <CardLink to="/services/onsite-safety-staffing-and-support/" style={{ transform: 'translateX(-50%)' }}></CardLink>
              <h3>Onsite Safety Staffing and Support</h3>
              <p>JCF focuses more on being a professional employer advocate service by providing onsite professional support tailored to the client's need.</p>
              <div className="round-button vertical-center">
                <img src="/arrow.svg" style={{ width: '35%', margin: '0 auto' }} alt="" />
              </div>
            </div>
          
            <div className="card">
              <CardLink to="/services/safety-training/" style={{ transform: 'translateX(-50%)' }}></CardLink>
              <h3>Safety Training</h3>
              <p>Providing safety training for your employees is the right thing to do. We understand that training is expensive and difficult to schedule.</p>
              <div className="round-button vertical-center">
                <img src="/arrow.svg" style={{ width: '35%', margin: '0 auto' }} alt="" />
              </div>
            </div>
          
            <div className="card">
            <CardLink to="/services/site-facility-safety-audits/" style={{ transform: 'translateX(-50%)' }}></CardLink>
              <h3>Site and Facility Safety Audits</h3>
              <p>Job site and facility audits are a necessary part of any safety program. Sometimes you may need an outside set of eyes.</p>
              <div className="round-button vertical-center">
                <img src="/arrow.svg" style={{ width: '35%', margin: '0 auto' }} alt="" />
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
        <TeamMembers>
          {data.allSanityTeam.nodes.map((member) => (
            <div key={member.id} className="card">
              <CardLink to={'/team/' + member.slug.current + '/'} style={{ transform: 'translateX(-50%)' }}/>
              <h3 key={member.firstname}>{member.firstname} {member.lastname}</h3>
              <p>{member.jobtitle}</p>
              <div className="gradient"></div>
              <Img 
                fluid={member.image.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                className="image"
                alt={member.firstname + " " + member.lastname + " headshot"}
              />
            </div>
          ))}
        </TeamMembers>
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
    allSanityTeam {
      nodes {
        id
        firstname
        lastname
        jobtitle
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`