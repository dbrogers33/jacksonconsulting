import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

const Button = styled(Link)`
    background: var(--green);
    color: var(--blue);
    margin: 2rem 0;
    padding: 1.25rem 3rem;
    font-family: 'Oswald';
    text-transform: uppercase;
    font-size: 1.75rem;
    text-decoration: none;
    text-align: center;
    width: fit-content;
    transition: ease .2s;
    &:hover {
      background: var(--dark-green);
    }
    @media only screen and (max-width: 670px) {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
`

export default function Footer({ link }) {
  return (
    <Button to={link}>
        Hire Us
    </Button>
  );
}