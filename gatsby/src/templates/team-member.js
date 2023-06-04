import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Hero from '../components/Hero'
import Img from "gatsby-image/withIEPolyfill" //<-- IE polyfill
import CTA from "../components/cta"
import SEO from "../components/seo"
import BlockContent from "../components/block-content"

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
    {/* <SEO
      title={team.firstname + " " + team.lastname + " | " + team.jobtitle}
      description={team.firstname + " " + team.lastname + " is the " + team.jobtitle + " at Jackson Consulting Firm. They are here to help you to develop the best safety program for your company."}
    /> */}
    {/* <Hero
        headline={team.firstname + " " + team.lastname}
        copy={team.jobtitle}
    /> */}
      <Container>
          {/* <div className="grid-item">
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
            <BlockContent blocks={team._rawBio} />
          </div> */}
          <h1>coming soon</h1>
        
      </Container>
      <Wrapper>
        <CTA />
      </Wrapper>
      
    </>
  );
}


