import React from "react"
import { Link } from "gatsby"
import NetlifyForm from 'react-netlify-form'
import styled from 'styled-components'

import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`
const Form = styled.div`
  button {
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
    cursor: pointer;
    border: none;
    display: block;
    &:hover {
      background: var(--dark-green);
    }
  }
  input {
    font-family: 'Open Sans';
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  textarea {
    font-family: 'Open Sans';
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`

const HireUs = () => (
  <>
    <Hero 
      headline="Let's get started"
      copy="Interested in hiring Jackson Consulting Firm to improve your safety operations? Fill out the form below with as much detail as possible and we'll contact you for a discovery call."
    />

    <Container>
      <NetlifyForm name='Hire Us Form'>
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <div>Thank you for contacting us!</div>
            }
            {!loading && !success &&
              <Form>
                <h2>Hire Us</h2>
                <input type='text' name='First Name' placeholder="First Name" required />
                <input type='text' name='Last Name' placeholder="Last Name" required />
                <input type='text' name='Company' placeholder="Company Name" />
                <input type='email' name='Email' placeholder="Email Address" required />
                <textarea name='Message' placeholder="What can Jackson Consulting Firm help you with?" required />
                <button>Submit</button>
              </Form>
            }
          </div>
        )}
      </NetlifyForm>
    </Container>
  </>
)

export default HireUs
