import React from "react"
import styled from 'styled-components';

import SEO from "../components/seo"
import Hero from "../components/Hero"
import CTA from '../components/cta'

const About = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  ul {
    list-style-type: none;
    font-family: 'Open Sans';
    line-height: 1.75rem;
    font-size: 18px;
    color: #767676;
  }
  li {
  padding-left: 1em;
  text-indent: -1em;
}

li:before {
  content: "+";
  color: var(--green);
  font-family: 'Open Sans';
  font-weight: 800;
  padding-right: 1rem;
}
`

const SecondPage = () => (
  <>
    <SEO
      title="About Us"
      description="We focus more on being a professional employer advocate service by providing onsite professional suppport rather than the typical conslult and leave approach."
    />
    <Hero 
      headline="A REDEFINED APPROACH TO PROFESSIONAL CONSULTING"
      copy="We focus more on being a professional employer advocate service by providing onsite professional suppport rather than the typical conslult and leave approach."
    />

    <About>
      <h2>About Jackson Consulting Firm</h2>
      <p>Jackson Consulting Firm serves companies of all sizes, in varioius industries to provide a professionally tailored solution to achieve safety success with a proactive safety culture. Our firrm can serve companies needing assistance from creating an entire program as a start-up or to assist with a specfic task for an existing company that needs a professional solution. All of our servicecs are professionally taileored to each client to ensure the client recieves the true assistance they are needing without overselling. At Jackson Consulting Firm we value our client relationship by making sure your success is our end goal.</p>
      <ul>
        <li className="list-item">Professionally Tailored Consulting Services</li>
        <li>Worplace Safety Audits</li>
        <li>Safety Staffing and Support</li>
        <li>Injury Case Management/Return to Work</li>
        <li>Customer Safety Prequalification</li>
      </ul>

      <h2>Why Chose Jackson Consulting Firm?</h2>
      <p>We focus more on being a professional employer advocate service by providing onsite professional suppport rather than the typical conslult and leave approach.</p>
      <p>JCF can bring value to your company's safety culture by leading these efforts from your facility or site rather than an off-site office.</p>
      <p>JCF owners, empoloyees, contractors, and parters are true to this region. We strive to make our clients success our top priority while ensuring our communities are a better place to work, live, and thrive for economic growth.</p>
      <p>Our firm can serve companies needing assistance from creating an entire program as a start-up or to assist witha specific task for an existing company that just needs a professional solution.</p>
      <CTA />
    </About>
  </>
)

export default SecondPage
