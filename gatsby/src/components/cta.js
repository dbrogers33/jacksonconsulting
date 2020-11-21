import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'

const CTABlock = styled.div`
    text-align: center;
    border: var(--blue) solid 3px;
    margin: 4rem;
    width: auto;
`

export default function Footer() {
  return (
    <CTABlock>
        <h2>ready for a real safety partnership? <Button link="/hire-us/">Hire Us</Button></h2>
    </CTABlock>
  );
}