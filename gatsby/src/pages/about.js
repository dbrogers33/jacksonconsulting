import React from "react"
import styled from 'styled-components';
import { graphql } from 'gatsby'
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

const SecondPage = ({ data }) => (
  <>
    <SEO
      title="About Us"
      description="We focus more on being a professional employer advocate service by providing onsite support rather than the typical consult and leave approach."
    />
    <Hero
      headline="A REDEFINED APPROACH TO PROFESSIONAL CONSULTING"
      copy="We focus more on being a professional employer advocate service by providing onsite support rather than the typical consult and leave approach."
      image={data.hero.childImageSharp.fluid}
    />

    <About>
      <h2>About Jackson Consulting Firm</h2>
      <p>Jackson Consulting Firm serves companies of all sizes in various industries to provide a professionally tailored solution to achieve safety success with a proactive safety culture. Our firm serves companies needing assistance in creating an entire program as a start-up or with a specific task for an existing company that needs a professional solution. All of our services are professionally tailored to each client to ensure the client receives the assistance they are needing without overselling. At Jackson Consulting Firm, we value our client relationship by making sure your success is our end goal.</p>
      <ul>
        <li className="list-item">Professionally Tailored Consulting Services</li>
        <li>Worplace Safety Audits</li>
        <li>Safety Staffing and Support</li>
        <li>Injury Case Management/Return to Work</li>
        <li>Customer Safety Prequalification</li>
      </ul>

      <h2>Why Chose Jackson Consulting Firm?</h2>
      <p>We focus more on being a professional employer advocate service by providing onsite support rather than the typical consult and leave approach.</p>
      <p>JCF can bring value to your company's safety culture by leading these efforts from your facility or site rather than an off-site office.</p>
      <p>JCF owners, employees, contractors, and partners are true to this region. We strive to make our client's success our top priority while ensuring our communities are a better place to work, live, and thrive for economic growth.</p>
      <p>Our firm can serve companies needing assistance creating an entire program as a start-up or with a specific task for an existing company that just needs a professional solution.</p>

      <h2>The Vision Behind Jackson Consulting Firm</h2>
      <p>This power couple has once again teamed up and set their radar on helping others achieve success in many different ways. Jackson Consulting Firm is a family-run business owned and operated by Justin and Stephanie Jackson. Their desire to be owners of this firm began with their passion to advocate not only to maintain corporate compliance, but to do so by leading those compliance efforts with a proactive culture.</p>
      <p>Justin has been in the safety and corporate compliance industry since graduating from Murray State University and has extensive experience in risk management, business operations, corporate compliance, public safety, and human resources. He is a very result-oriented person seeing firsthand the quality of life and the spread of a positive atmosphere within their clients when providing comprehensive and quality professional services.</p>
      <p>Stephanie began her career as a nurse after graduating from Murray State University with a BS in Nursing and Bethel University with an MBA, emphasizing in human resources. After graduation Stephanie worked as a nurse and loved caring for people striving to make their quality of life better. Stephanie then transitioned into the business and administration field where she continues to influence innumerable aspects of an organization as well as assists in development of its employees.</p>
      <p>The Jackson's, along with the team and partners they lead strive each day to make sure their client’s success is top priority while ensuring the communities they serve are a better place to live, work, and thrive for economic growth with the services they offer.</p>
      <CTA />
    </About>
  </>
)

export default SecondPage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`