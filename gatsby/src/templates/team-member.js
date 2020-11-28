import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Hero from '../components/Hero'
import Img from "gatsby-image/withIEPolyfill" //<-- IE polyfill
import CTA from "../components/cta"
import SEO from "../components/seo"

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  @media only screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    .grid-item {
        padding: 2rem;
    }
  }
`
const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`

export default function ServicePage({ data: { team } }) {
  return (
    <>
    <SEO
      title={team.firstname + " " + team.lastname + " | " + team.jobtitle}
    />
    <Hero
        headline={team.firstname + " " + team.lastname}
        copy={team.jobtitle}
    />
      <Container>
          <div className="grid-item">
          <Img 
            fluid={team.image.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            className="image"
            alt={team.firstname + " " + team.lastname + " headshot"}
            />
          </div>
          <div className="grid-item">
            <p><b>Phone: </b>{team.phone}</p>
            <p><b>Email: </b>{team.email}</p>
            <p>{team.bio}</p>
          </div>
        
      </Container>
      <Wrapper>
        <CTA />
      </Wrapper>
      
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    team: sanityTeam(slug: { current: { eq: $slug } }) {
      firstname
      lastname
      jobtitle
      id
      bio
      email
      phone
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
