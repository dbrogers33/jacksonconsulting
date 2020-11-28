import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Hero from '../components/Hero'
import HireForm from '../components/hire-us-form'
import SEO from '../components/seo'

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
`

export default function ServicePage({ data: { service } }) {
  return (
    <>
    <SEO
      title={service.service}
      description={"Jackson Consulting Firm can assist you with " + service.service + ". Our team can help develop the right safety program for your company."}
    />
    <Hero
        headline={service.service}
    />
      <Container>
        <p>{service.description}</p>
        <HireForm 
          header={"Hire Us for " + service.service}
          formName={"Hire Request - " + service.service  }
        />
      </Container>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    service: sanityServices(slug: { current: { eq: $slug } }) {
      service
      id
      description
    }
  }
`;
