import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

const FooterWrapper = styled.footer`
    background: var(--blue);
    color: white;
    padding: 1rem;
    .credits {
        text-align: center;
        color: white;
        font-size: 11px;
        margin-top: 2rem;
        a {
          color: white;
        }
    }
    p {
      color: white;
      font-size: .75rem;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      padding: .1rem 0;
    }
`
const Grid = styled.div`
  @media only screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-column-gap: 2rem;
  }
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'Open Sans';
  font-size: .75rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Grid>
        <div>
          <h3>About Us</h3>
          <p>Jackson Consulting Firm, LLC specializes in safety training, consulting, and recruitment for both local and national size companies. We primarily serve the states of Kentucky and Tennessee but can partner with clients anywhere.</p>
        </div>
        <div>
          <h3>Services</h3>
            <ul>
              <li><FooterLink to="/services/onsite-safety-staffing-and-support/">Onsite Safety Staffing and Support</FooterLink></li>
              <li><FooterLink to="/services/safety-training/">Safety Training</FooterLink></li>
              <li><FooterLink to="/services/site-facility-safety-audits/">Site and Facility Safety Audits</FooterLink></li>
              <li><FooterLink to="/services/">View All Services</FooterLink></li>
            </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
              {/* REMOVING UNTIL MORE TEAM MEMBERS ARE ADDED */}
              {/* <li><FooterLink to="/team/">Our Team</FooterLink></li> */}
              <li><FooterLink to="/about/">About Us</FooterLink></li>
              <li><FooterLink to="/contact/">Contact Us</FooterLink></li>
              <li><FooterLink to="/hire-us/">Hire Us</FooterLink></li>
            </ul>
        </div>
      </Grid>
        <p className="credits">&copy; {new Date().getFullYear()} Jackson Consulting Firm, LLC. Website design by <a href="https://denhamrogers.com">Denham Rogers</a>.</p>
    </FooterWrapper>
  );
}