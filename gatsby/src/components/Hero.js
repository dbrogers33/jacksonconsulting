import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"
import Button from '../components/Button'

const HeroWrapper = styled.div`
    background: var(--blue);
    color: white;
    @media only screen and (min-width: 650px) {
        padding-top: 6rem;
    }
    p {
        color: white;
    }
    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        @media only screen and (min-width: 650px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    .vertical-center {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        padding-bottom: 4rem;
    }
`

export default function Hero({ children, image, headline }) {
  return (
    <HeroWrapper>
        <div className="container">
            <div className="vertical-center">
                <h1>{headline}</h1>
                <p>“We go the extra effort to make sure that your company is not only meeting government regulations, but develop a custom plan so your team can manage themselves.” - Justin Jackson</p>
                {children}
            </div>
            <div> 
                <Img fluid={image} />
            </div>
        </div>
    </HeroWrapper>
  );
}

