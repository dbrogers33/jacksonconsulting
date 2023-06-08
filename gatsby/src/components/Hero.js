import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

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
        @media only screen and (max-width: 650px) {
            padding-bottom: 0px;
        }
    }
    .hero-image {
        position: relative;
        height: auto;
        @media only screen and (max-width: 650px) {
            margin-top: -2rem;
        }
    }
`

export default function Hero({ children, image, headline, copy }) {
  return (
    <HeroWrapper>
        <div className="container">
            <div className="vertical-center">
                <h1>{headline}</h1>
                <p>{copy}</p>
                {children}
            </div>
            <div className="hero-image"> 
                <StaticImage className="styled-image" src="../images/logo-hero.png" alt="Jackson Consulting Logo" layout='fullWidth' />
            </div>
        </div>
    </HeroWrapper>
  );
}

