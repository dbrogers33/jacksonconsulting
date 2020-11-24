import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Hero from '../components/Hero'
import HireFrom from '../components/hire-us-form'

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
`

export default function ServicePage({ data: { service } }) {
  return (
    <>
    <Hero
        headline={service.service}
    />
      <Container>
        <p>{service.description}</p>
        <HireFrom 
          header={'Hire Us for ' + service.service}
          name={'Hire Request -' + ' ' + service.service  }
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
