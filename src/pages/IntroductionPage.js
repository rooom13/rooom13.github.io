import React from 'react';
import styled from 'styled-components'
import profilePicPath from '../images/profile.png'
import media from '../media'

function IntroductionPage() {
    return (

        <Wrapper id="introduction">
            <span>
                <div >Hi there!</div>
                <ProfilePicMobileWrapper>
                    <ProfilePicMobile src={profilePicPath} />
                </ProfilePicMobileWrapper>

                <div> I'm <BigName>Román Rey Pedrero</BigName></div>
                <span>a computer science & engineering student from Barcelona based in Munich who loves all the science behind <CoolTopic>Cognitive Systems</CoolTopic> such as <CoolTopic>Machine Learning, Natural Language Processing, Computer Vision and Artificial Intelligence <span aria-label={'robot'}role={'img'}>🤖</span></CoolTopic></span>
                <p>I as well have a developer soul wich encourages me to be a self learner and carry out my personal projects to discover new paths.</p>
          <div><i><b>*** Please note that I'm still developing this website :) *** </b></i></div>
            </span>

            {<ProfilePicTablet isNotMobile src={profilePicPath} />}
        </Wrapper>

    )
}


const CoolTopic = styled.span`
  font-size:1.1rem;
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
    heihgt: 16rem;
    border-radius: 50%; 
    padding: 0.5rem;
    border: 1px solid;
    margin: 1rem;
  `}
  
`

export default IntroductionPage
