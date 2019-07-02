import React from 'react';
import styled from 'styled-components'
import SideNavbar from './components/SideNavbar';
import './App.css';
import { genericTypeAnnotation } from '@babel/types';

function App() {


  return (

    <Wrapper>

      <NavWrapper>


        <StyledNav>

          <NavItem>Who I am</NavItem>
          <NavItem>CV</NavItem>
          <NavItem>Portfolio</NavItem>
          <NavItem>Contact</NavItem>
        </StyledNav>

      </NavWrapper>

      <h2 background>Román Rey Pedrero</h2>

    </Wrapper>
  )


  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
        <i className="fas fa-bars"></i>
      </a>
      <SideNavbar />

      <main className="page-content">
        <div className="container-fluid">
          <h2>Román Rey Pedrero</h2>

          <div className="row">
            <div className="form-group col-md-12" id="Welcome">
              <p>Hi there!!! Servus! Hola!</p>
              <p>So this is supposed to be my personal page but seems like I'm building it 😅</p>
            </div>
          </div>



        </div>
      </main >
    </div >
  );
}


const NavWrapper = styled.div`
  width: 100%;

`


const StyledNav = styled.nav`
  margin-top: 5rem;  
  display: flex;
  justify-content: center;
`

const NavItem = styled.a`
  cursor:pointer;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-bottom: 2px solid black;
  
  &:hover {
    border-bottom: 2px solid white;
  }
  &:focus {
    font-style: italic;
  }
`

const Wrapper = styled.div`
  color: white;
  
`

export default App;
