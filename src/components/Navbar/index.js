import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import media from '../../media'
import Animation from './Animation'
import { FONTCOLOR, BUTTONCOLOR, BACKGROUNDCOLOR } from '../../Colors';

class Navbar extends Component {

  state = {
    animation: Math.floor(Math.random() * 5)
  }

  render() {

    const { animation } = this.state

    const activeStyle = {
      fontStyle: "italic",
      borderBottom: `2px solid ${BUTTONCOLOR}`
    }

    return (
      <Wrapper>
        <Animation animation={animation} id='left' />
        <StyledNav>
          <StyledNavLink activeStyle={activeStyle} exact to="/">Who I am</StyledNavLink>
          <StyledNavLink activeStyle={activeStyle} to="/cv">CV</StyledNavLink>
          <StyledNavLink activeStyle={activeStyle} to="/portfolio">Portfolio</StyledNavLink>
          <StyledNavLink activeStyle={activeStyle} to="/contact">Contact</StyledNavLink>
        </StyledNav>
        <Animation animation={animation} inverted id='right' />
      </Wrapper>
    )
  }

}

const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`
const StyledNav = styled.nav`
width: 100%;

${media.tablet`
  margin-top: 8rem;  
`}

  display: flex;
  justify-content: center;
`

const StyledNavLink = styled(NavLink)`
  cursor:pointer;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-bottom: 2px solid ${BACKGROUNDCOLOR};
  text-decoration: none; 

  color: unset;

  &:hover {
    border-bottom: 2px solid ${FONTCOLOR};
  }
`

export default Navbar
