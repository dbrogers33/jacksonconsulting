import React from 'react';
import styled from 'styled-components';
import NetlifyForm from 'react-netlify-form'

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
    height: 6rem;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`

export default function HireUs({ formName, header }) {
  return (
    <NetlifyForm name={formName}>
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
                <h2>{header}</h2>
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
  );
}