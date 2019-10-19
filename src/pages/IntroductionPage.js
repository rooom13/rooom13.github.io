import React from 'react';
import styled from 'styled-components'
import profilePicPath from '../images/profile.png'
import media from '../media'
import Emoji from '../components/Emoji'

function IntroductionPage() {
    return (
        <Wrapper id="introduction">
            <span>
                <div >Hi there!</div>
                <ProfilePicMobileWrapper>
                    <ProfilePicMobile src={profilePicPath} />
                </ProfilePicMobileWrapper>
                <div> I'm <BigName>Román Rey Pedrero</BigName></div>
                <span>a Data Scientist from Barcelona based in Munich who loves all the 
                  science behind Cognitive Systems such as Machine Learning, 
                    Natural Language Processing, Computer Vision and Artificial Intelligence  
                    <Emoji  symbol=' 🤖' label='robot'/></span>
                <p>I have as well background and experience in Software Engineering topics.</p><p> Check my portfolio! <Emoji symbol='🙌' label='hands clapping'></Emoji></p>
          {/* <div><i><b>*** Please note that I'm still developing this website <Emoji symbol='🔜' label='coming soon' /> *** </b></i></div> */}
            </span>
            {<ProfilePicTablet isNotMobile src={profilePicPath} />}
        </Wrapper>
    )
}

const CoolTopic = styled.span`
  // font-size:1rem;
  font-family: monospace;
`
const Wrapper = styled.div`
  display: flex;
  line-height: 1.5
`
const BigName = styled.b`
  font-size: 1.5rem;
  ${media.tablet`
    font-size: 3rem;
  `}
`
const ProfilePicMobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%
`
const ProfilePicMobile = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%; 
  padding: 0.5rem;
  border: 1px solid;
  margin: 1rem;
  ${media.tablet`
    display:none;
  `}
`
const ProfilePicTablet = styled.img`
  display: none;
  ${media.tablet`
    display: block;
    width: 16rem;
    height: 16rem;
    border-radius: 50%; 
    padding: 0.5rem;
    border: 1px solid;
    margin: 1rem;
  `}
`
export default IntroductionPage
