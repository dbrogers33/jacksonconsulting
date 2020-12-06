import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image/withIEPolyfill" //<-- IE polyfill
import SEO from "../components/seo"
import Hero from "../components/Hero"
import CTA from '../components/cta'


const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`
const TeamMembers = styled.div`
    text-align: center;
  @media only screen and (min-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .image {
    border-radius: .5rem;
  }
  .card {
    @media only screen and (min-width: 650px) {
      width: 28%;
    }
    width: 100%;
    margin: 3rem 0;
    position: relative;
    border-radius: .5rem;
    &:hover {
      cursor: pointer;
      h3 {
        bottom: 50%;
      }
      .gradient {
        background: rgba(23, 56, 67, 0.75);
      }
      p {
        opacity: 100%;
      }
    }
  }
  .gradient {
    border-radius: .5rem;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 54.7%, #173843 100%);
    transition: ease .5s;
  }
  h3 {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transition: ease .5s;
  }
  p {
    font-size: .75rem;
    position: absolute;
    bottom: 45%;
    z-index: 2;
    color: white;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transition: ease .5s;
    transition-delay: .5s;
    opacity: 0;
  }
`
const MemberLink = styled(Link)`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 5;
    transform: translateX(-50%);
`

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Our Team"
      description="Jackson Consulting Firms enables the best employees and contractors to make your company safer. Meet some of the staff that you will be working with."
    />
    <Hero 
      headline="meet our leadership team"
      copy="Our firm can serve companies needing assistance from creating an entire program as a start-up or to assist with a specific task for an existing company that just needs a professional solution."
    />
   <Container>
    <TeamMembers>
          {data.allSanityTeam.nodes.map((member) => (
                <div className="card">
                    <MemberLink to={member.slug.current}></MemberLink>
                <h3 key={member.firstname}>{member.firstname} {member.lastname}</h3>
                <p>{member.jobtitle}</p>
                <div className="gradient"></div>
                <Img 
                    fluid={member.image.asset.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    className="image"
                    alt={member.firstname + " " + member.lastname + " headshot"}
                />
                </div>
          ))}
        </TeamMembers>
        <CTA />
   </Container>
  </>
)

export default IndexPage

export const query = graphql`
  query {
    allSanityTeam {
        nodes {
          firstname
          lastname
          jobtitle
          slug {
              current
          }
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
  }
`