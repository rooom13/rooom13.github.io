import React from 'react';
import styled from 'styled-components'
import ContactButton from '../components/ContactButton'
import media from '../media'

export default function Contact() {
  
  const mailLink = "mailto:romanreypedrero@gmail.com?subject=Your personal website is so cool&body=Hey Román how are you doing?"
  const linkedinLink ="https://www.linkedin.com/in/roman-rey-pedrero"
  const githubLink = "https://www.github.com/rooom13"

  const mailClass = "fa fa-envelope-o fa-4x"
  const linkedinClass = "fa fa-linkedin fa-4x"
  const githubClass = "fa fa-github fa-4x"

  return (


    
    <Wrapper>
      <p>Let's have a talk!</p>
      <ButtonsWrapper>
        <ContactButton iconClass={mailClass }link={mailLink}>romanrepedrero@gmail.com</ContactButton>
        <ContactButton iconClass={linkedinClass} link={linkedinLink} >linkedin.com/in/roman-rey-pedrero</ContactButton>
        <ContactButton iconClass={githubClass} link={githubLink} target="_blank" title="GitHub has no chat but you can see my projects there!">github.com/rooom13  </ContactButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${media.tablet`
  flex-direction: row;
  justify-content: space-evenly;

  `}


`


const Wrapper = styled.div`

  `