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
        an AI engineer from Barcelona based in Munich who loves all the
        science behind Cognitive Systems.
        <p>Since I was a kid I was asking myself what kind of black magic was going on behind such boxes called computers (when they used to be boxes). Many years later I keep turning black magic into science.
                    <Emoji symbol=' 🤖' label='robot' /></p>
        {/* <p>I have as well background and experience in Software Engineering topics.</p>*/}
        <p> Check my portfolio! <Emoji symbol='🙌' label='hands clapping'></Emoji></p>
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
