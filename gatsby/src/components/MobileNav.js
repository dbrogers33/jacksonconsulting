import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const MenuWrapper = styled.div`
    width: 100%;
    background: #fff;
    height: 76px;
    @media only screen and (min-width: 670px) {
        display: none;
    }
    .logo {
      position: absolute;
      width: 60px;
      height: 60px;
      top: 4px;
      left: 6px;
    }
`
const StyledLink = styled(Link)`
    font-family: 'Oswald';
    margin: 1.5rem 1.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--blue);
    text-decoration: none;
    &:focus {
      outline: none;
    }
`
const ContactBar = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  p {
    color: var(--blue);
    margin-bottom: .2rem;
    font-size: .85rem;
  }
`
 
class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <MenuWrapper>
            <div className="logo"><img className="logo" src="logo.svg" alt="Jackson Consulting Firm Logo" /></div>
            <Menu right>
                <StyledLink id="home" className="menu-item" href="/">Home</StyledLink>
                <StyledLink id="about" className="menu-item" href="/about/">About</StyledLink>
                <StyledLink id="services" className="menu-item" href="/services/">Services</StyledLink>
                <StyledLink id="contact" className="menu-item" href="/contact/">Contact</StyledLink>
                <ContactBar>
                  <p>270-254-0261</p>
                  <p>info@jacksonconsultingfirmllc.com</p>
                </ContactBar>
            </Menu>
        </MenuWrapper>
    );
  }
}

export default Example;