import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar/';
import IntroductionPage from './pages/IntroductionPage'
import CVPage from './pages/CVPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import media from './media'
import {FONTCOLOR} from './Colors'

class App extends Component {

  state = {
    isIntroductionShown: false,
    isCVShown: false,
    isPortfolioShown: true,
    isContactShown: false,
  }



  showContact = () => {
    this.setState({
      isContactShown: true,
      isCVShown: false,
      isIntroductionShown: false,
      isPortfolioShown: false
    })
  }
  showCv = () => {
    this.setState({
      isContactShown: false,
      isCVShown: true,
      isIntroductionShown: false,
      isPortfolioShown: false
    })
  }
  showPortfolio = () => {
    this.setState({
      isContactShown: false,
      isCVShown: false,
      isIntroductionShown: false,
      isPortfolioShown: true
    })
  }
  showIntroduction = () => {
    this.setState({
      isContactShown: false,
      isCVShown: false,
      isIntroductionShown: true,
      isPortfolioShown: false
    })
  }
  render() {

    const { isContactShown, isCVShown, isIntroductionShown, isPortfolioShown } = this.state

    return (

      <Wrapper>
        <Navbar
          isIntroductionShown={isIntroductionShown}
          isCVShown={isCVShown}
          isPortfolioShown={isPortfolioShown}
          isContactShown={isContactShown}

          showIntroduction={this.showIntroduction}
          showCv={this.showCv}
          showPortfolio={this.showPortfolio}
          showContact={this.showContact}
        />
        <ContentWrapper>
          <Content>
            {isIntroductionShown && <IntroductionPage />}
            {isCVShown && <CVPage />}
            {isPortfolioShown && <PortfolioPage />}
            {isContactShown && <ContactPage />}
          </Content>
        </ContentWrapper>
      </Wrapper>
    )
  }
}


const Content = styled.section`
  margin: 1rem;
  margin-top: 4rem;
  ${media.tablet` 
    margin-top: 11rem;
  `}
  width: 800px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  color: ${FONTCOLOR};
`

export default App;
