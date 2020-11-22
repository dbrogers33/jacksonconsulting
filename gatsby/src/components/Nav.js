import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import MobileNav from '../components/MobileNav'

const NavStyles = styled.nav`
  @media only screen and (max-width: 670px) {
    display: none;
  }
  margin-bottom: 3rem;
  width: 90%;
  max-width: 1300px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: white;
  position: absolute;
  .menu {
    display: grid;
    grid-template-columns: 100px auto 500px;
    grid-template-rows: 26px 60px;
  }
  .logo {
    margin: 1rem;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    height: 225%;
  }
  .contact-bar {
    background: var(--green);
    grid-column-start: 3;
    text-align: center;
    p {
      color: black;
      font-size: .75rem;
      text-transform: uppercase;
      letter-spacing: .07rem;
    }
  }
  ul {
    grid-row-start: 2;
    grid-column-start: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin: 0;
    padding: 0 2rem;
    list-style: none;
    text-align: center;
    align-items: center;
    width: 50% auto;
    float: right;
  }
`
const StyledLink = styled(Link)`
    font-size: 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-family: 'Oswald';
    font-weight: bold;
    &:hover {
      border-bottom: var(--green) 3px solid;
    }
`

export default function Nav() {
    return (
      <>
      <NavStyles>
        <div className="menu">
          <img className="logo" src="logo.svg" />
          <div className="contact-bar"><p>555-555-5555 | info@jacksonconsultingfirmllc.com</p></div>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/about/">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/services/">Services</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact/">Contact</StyledLink>
            </li>
          </ul>
        </div>
      </NavStyles>
      <MobileNav />
      </>
    );
  }
  