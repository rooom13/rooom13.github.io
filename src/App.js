import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar/';
import IntroductionPage from './pages/IntroductionPage'
import ContactPage from './pages/ContactPage'
import CVPage from './pages/CVPage'
import media from './media'

class App extends Component {

  state = {
    isIntroductionShown: true,
    isCVShown: false,
    isPortfolioShown: false,
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
          isContactShown={isContactShown}
          isCVShown={isCVShown}
          isIntroductionShown={isIntroductionShown}
          isPortfolioShown={isPortfolioShown}

          showContact={this.showContact}
          showCv={this.showCv}
          showPortfolio={this.showPortfolio}
          showIntroduction={this.showIntroduction} />
        <ContentWrapper>
          <Content>
            {isIntroductionShown && <IntroductionPage />}
            {isContactShown && <ContactPage />}
            {isCVShown && <CVPage />}
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
  color: white;
  
`

export default App;
