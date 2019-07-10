import React, { Component } from 'react';
import styled from 'styled-components'
import media from '../../media'
import Animation from './Animation'

class Navbar extends Component {


  state = {
    animation: Math.floor(Math.random()*(2+1))
  }
  componentDidMount(){

  }


  render() {

    const { isIntroductionShown, isContactShown, isPortfolioShown, isCvShown, showIntroduction, showContact, showCv, showPortfolio } = this.props
    const {animation} = this.state
    return (
      <Wrapper>
        <Animation animation={animation} id='left' />
        <StyledNav>
          <NavItem isSelected={isIntroductionShown} onClick={showIntroduction}>Who I am</NavItem>
          <NavItem isSelected={isCvShown} onClick={showCv}>CV</NavItem>
          <NavItem isSelected={isPortfolioShown} onClick={showPortfolio}>Portfolio</NavItem>
          <NavItem isSelected={isContactShown} onClick={showContact}>Contact</NavItem>
        </StyledNav>
        <Animation animation={animation} inverted  id='right'/>
      </Wrapper>
    )
  }

}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
`
const StyledNav = styled.nav`
width: 100%;
background-color: rgba(0, 0, 0, 0.9);

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
  
  ${(props) => props.isSelected && `
    font-style: italic;
    border-bottom: 2px solid grey;
  `};
  &:hover {
    border-bottom: 2px solid white;
  }

  }
`

export default Navbar
