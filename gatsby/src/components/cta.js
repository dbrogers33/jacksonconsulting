import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'

const CTABlock = styled.div`
    padding: 1rem 1rem 2rem 1rem;
    text-align: center;
    border: var(--blue) solid 3px;
    width: auto;
    margin-bottom: 4rem;
    margin-top: 4rem;
    position: relative;
    .button {
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      left: 0;
      right: 0;
      margin-right: auto;
      margin-left: auto;
    }
    @media only screen and (min-width: 650px) {
      margin: 4rem 4rem 8rem 4rem;
    }
`

export default function Footer() {
  return (
    <CTABlock>
        <h2>ready for a real safety partnership? </h2>
        <div className="button">
          <Button link="/hire-us/">Hire Us</Button>
        </div>
    </CTABlock>
  );
}