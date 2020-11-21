import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Import css files for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Logos = styled.div`
    .slick-arrow::before {
        color: var(--green);
    }
    .client-logo {
        margin: 3rem;
    }
`

export default function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
        <StaticQuery
        query={graphql`
            query {
                spotify: file(relativePath: { eq: "business-logos/spotify.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                google: file(relativePath: { eq: "business-logos/google.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Logos>
            <Slider {...settings}>
                <div>
                    <Img className="client-logo" fluid={data.spotify.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.google.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.spotify.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.google.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.spotify.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.google.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.spotify.childImageSharp.fluid} />
                </div>
                <div>
                    <Img className="client-logo" fluid={data.google.childImageSharp.fluid} />
                </div>
            </Slider>
            </Logos>
        )}
        />
    )
}