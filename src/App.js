import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Introduction from './pages/Introduction'
import Contact from './pages/Contact'

class App extends Component {

  state = {
    isContactShown: false,
    isCvShown: false,
    isIntroductionShown: true,
    isPortfolioShown: false
  }



  showContact = () => {
    this.setState({
      isContactShown: true,
      isCvShown: false,
      isIntroductionShown: false,
      isPortfolioShown: false
    })
  }
  showCv = ()   => {
    this.setState({
      isContactShown: false,
      isCvShown: true,
      isIntroductionShown: false,
      isPortfolioShown: false
    })
  }
  showPortfolio = ()   => {
    this.setState({
      isContactShown: false,
      isCvShown: false,
      isIntroductionShown: false,
      isPortfolioShown: true
    })
  }
  showIntroduction = ()   => {
    this.setState({
      isContactShown: false,
      isCvShown: false,
      isIntroductionShown: true,
      isPortfolioShown: false
    })
  }
  render() {

    const { isContactShown, isCvShown, isIntroductionShown, isPortfolioShown } = this.state

    return (

      <Wrapper>
        <Navbar 
        isContactShown={isContactShown}
        isCvShown={isCvShown}
        isIntroductionShown={isIntroductionShown}
        isPortfolioShown={isPortfolioShown}

        showContact={this.showContact} 
        showCv={this.showCv}
        showPortfolio={this.showPortfolio}
        showIntroduction={this.showIntroduction} />
        <ContentWrapper>
          <Content>
            {isIntroductionShown && <Introduction />}
            {isContactShown && <Contact />}
          </Content>
        </ContentWrapper>
      </Wrapper>
    )
  }
}


const Content = styled.section`
  margin: 1rem;
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
