import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import CTA from "../components/cta"

const Services = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  ul {
    @media only screen and (min-width: 650px) {
      column-count: 2;
    }
    list-style-type: none;
    font-family: 'Open Sans';
    line-height: 1.75rem;
    font-size: 18px;
    color: #767676;
    list-style-position: outside;
  }
  li {
    text-indent: -1em;
  }
  li:before {
    content: "+";
    color: var(--green);
    font-family: 'Open Sans';
    font-weight: 800;
    margin-right: 1rem;
  }
`

const IndexPage = () => (
  <>
    <Hero headline="Here's how we can improve your company" />
    <Services>
      <h2>Consulting Services</h2>
      <ul>
        <li>Breath & Alchol Testing (BAT) - DOT/NON-DOT</li>
        <li>Claims Case Managers</li>
        <li>Contractor Management Program</li>
        <li>Drug-Testing - DOT/NON-DOT</li>
        <li>Employee Interviews</li>
        <li>Employee Processing Set-Up Assistance (Physicals, Drug Testing, Training, etc.)</li>
        <li>Lock-Out/Tag-Out Assessments and Plans</li>
        <li>Recordkeeping Assitance (OSHA 300 & Insurance)</li>
        <li>Safety Mettings - Topic Development</li>
        <li>Employee Staffing & Recruiting Assistance</li>
        <li>Ergonomic Assessments & Training</li>
        <li>Goal Setting & Program Tracking</li>
        <li>Incident Investigation/Emergency Response</li>
        <li>Industrail Hygiene Monitoring (Noise/Air Sampling)</li>
        <li>JSA/TSA/JHA/AHA Development</li>
        <li>Lock-Out/Tag-Out Assessments and Procedure Development</li>
        <li>Personal Protective Equipment Assessments</li>
        <li>Plan of Action Development</li>
        <li>Respirator Fit Testing & Medical Evaluations</li>
        <li>Safety Committee</li>
        <li>Safety Culture Appraisals</li>
        <li>Safety Data Sheet Management Program</li>
        <li>Safety Meetings</li>
        <li>Site Specific Plan Development</li>
        <li>Workers Compensation Claims Assistance</li>
      </ul>

      <h2>Training Courses</h2>
      <ul>
        <li>Annual OSHA Traing - Client Tailored</li>
        <li>New Hire Orientation - Client Tailored</li>
        <li>Aerial Lift</li>
        <li>Scissor Lift</li>
        <li>Arc Flash Awareness</li>
        <li>ATSSA Certified Flagger Courses</li>
        <li>Boodborne Pathogen</li>
        <li>Confined Space</li>
        <li>CPR & First Aid</li>
        <li>Drug Free Workplace Training</li>
        <li>Electrical Safety</li>
        <li>Emergency Response Planning</li>
        <li>Ergonomics</li>
        <li>Fall Protection</li>
        <li>Forklif (Powered Industrail Vehicle)</li>
        <li>Global Harmonization System (GHS) (Hazard Communication)</li>
        <li>HAZWOPER</li>
        <li>Hearing Protection</li>
        <li>Job Safety/Job Hazard Analysis</li>
        <li>Ladder Safety</li>
        <li>Leadership & How to Develop an Effective Safety Program</li>
        <li>Lockout Tagout</li>
        <li>Machine Guarding</li>
        <li>MSHA Courses</li>
        <li>New Hire Orientation - Client Tailored</li>
        <li>NFPA 70E</li>
        <li>OSHA 10 - General Industry/Construction</li>
        <li>OSHA 30 - General Industry/Construction</li>
        <li>Personal Protective Equipment</li>
        <li>Record Keeping</li>
        <li>Respirator Training</li>
        <li>Safety Program Launch</li>
        <li>Welding Safety</li>
      </ul>
      <CTA />
    </Services>
  </>
)

export default IndexPage
