import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './components/Navbar/';
import IntroductionPage from './pages/IntroductionPage'
import CVPage from './pages/CVPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import media from './media'
import { FONTCOLOR } from './Colors'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Wrapper>
          <Navbar />
          <ContentWrapper>
            <Content>
              <Switch>
                <Route exact path="/cv" component={CVPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route component={IntroductionPage} />
              </Switch>
            </Content>
          </ContentWrapper>
        </Wrapper>
      </HashRouter>
    )
  }
}


const Content = styled.section`
  margin: 1rem;
  margin-top: 4rem;
  ${media.tablet` 
    margin-top: 12rem;
  `}
  width: 800px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  color: ${FONTCOLOR};
  font-size: 1.25rem;
`

export default App;
