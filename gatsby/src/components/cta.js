import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'

const CTABlock = styled.div`
    text-align: center;
    border: var(--blue) solid 3px;
    width: auto;
    margin-bottom: 4rem;
    @media only screen and (min-width: 650px) {
      margin: 4rem;
    }
`

export default function Footer() {
  return (
    <CTABlock>
        <h2>ready for a real safety partnership? </h2><Button link="/hire-us/">Hire Us</Button>
    </CTABlock>
  );
}