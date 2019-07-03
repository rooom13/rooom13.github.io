import React, { Component } from 'react';
import styled from 'styled-components'
import media from '../media'

class Navbar extends Component {



    render() {

    const { isIntroductionShown, isContactShown, isPortfolioShown, isCvShown, showIntroduction, showContact, showCv, showPortfolio} = this.props
        return (
            <NavWrapper>
                <StyledNav>
                    <NavItem isSelected={isIntroductionShown} onClick={showIntroduction}>Who I am</NavItem>
                    <NavItem isSelected={isCvShown} onClick={showCv}>CV</NavItem>
                    <NavItem isSelected={isPortfolioShown} onClick={showPortfolio}>Portfolio</NavItem>
                    <NavItem isSelected={isContactShown} onClick={showContact}>Contact</NavItem>
                </StyledNav>
            </NavWrapper>
        )
    }

}


const NavWrapper = styled.div`
  
  width: 100%;
`
const StyledNav = styled.nav`

${media.tablet`
  margin-top: 8rem;  
`}

  display: flex;
  justify-content: center;
`

const NavItem = styled.div`
  cursor:pointer;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-bottom: 2px solid black;
  
  ${(props)=>props.isSelected && `
    font-style: italic;
  `};
  &:hover {
    border-bottom: 2px solid white;
  }
  &:focus {
    font-style: italic;
  }
`

export default Navbar
