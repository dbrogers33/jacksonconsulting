import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const MenuWrapper = styled.div`
    @media only screen and (min-width: 670px) {
        display: none;
    }
`
const StyledLink = styled(Link)`
    font-family: 'Oswald';
    margin: 1rem;
    text-transform: uppercase;
    color: var(--blue);
    text-decoration: none;
`
 
class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <MenuWrapper>
            <Menu right>
                <StyledLink id="home" className="menu-item" href="/">Home</StyledLink>
                <StyledLink id="about" className="menu-item" href="/about/">About</StyledLink>
                <StyledLink id="services" className="menu-item" href="/services/">Services</StyledLink>
                <StyledLink id="contact" className="menu-item" href="/contact">Contact</StyledLink>
            </Menu>
        </MenuWrapper>
    );
  }
}

export default Example;