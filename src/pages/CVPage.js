import React from 'react';
import styled from 'styled-components'
import Link from '../components/Link'
import CVen_path from '../CV/CV_RomanRey_en.pdf'
import media from '../media';
import { BUTTONHOVERCOLOR, BUTTONACTIVECOLOR } from '../Colors';

function CVPage() {
  return (

    <Wrapper >

      <PDFmessage>Check and download a <b>PDF version</b> of my CV <Link href={CVen_path} target="_blank" >here!</Link></PDFmessage>

      <h3>Skills</h3>
      <Skills >
        <SkillLine >
          <Skill >
            <H4>Machine Learning & Data Mining</H4>
            Python, Sklearn, Pandas, TensorFlow - Keras
        </Skill >
          <Skill >
            <H4>Cloud Computing</H4>
            Docker, AWS
        </Skill >
          <Skill >
            <H4>Software Engineering</H4>
            Software Design, Object oriented, C++, Java
        </Skill >
        </SkillLine>
        <SkillLine>
          <Skill >
            <H4>Web Development</H4>
            Node.js, HTML, Javascript, CSS, React.js
          </Skill >
          <Skill >
            <H4>Database Management</H4>
            SQL & NoSQL, MySQL, Redis, MongoDB
          </Skill >
          <Skill >
            <H4>Coming soon ...</H4>
            Always learning
          </Skill >
        </SkillLine>
      </Skills>

      <h3>Languages (4) </h3>
      <Languages>
        <Lan>
        <span role='img' aria-label='Great Britain flag'>🇬🇧</span>
          <div>English</div>
        </Lan>
        <Lan>
        <span role='img' aria-label='German flag'>🇩🇪</span>
          <div>German</div>
        </Lan>

        <Lan>
        <span role='img' aria-label='Spanish flag'>🇪🇸</span>
          <div>Spanish</div>
        </Lan>
        <Lan>
          <span  role='img' aria-label='flag'>🏴󠁥󠁳󠁣󠁴󠁿</span>
          <div>Catalan</div>

        </Lan>

      </Languages>


    </Wrapper>

  )
}

const Lan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const H4 = styled.h4`
  color: #0a845c;
  border-bottom: 1px solid ${BUTTONHOVERCOLOR};
  margin: 0.6rem 0;
  ${media.tablet`
    margin: 0.8rem 0;
  `}
`

const PDFmessage = styled.div`
  font-style: italic;
`

const Languages = styled.div`
  display: flex;
  justify-content: space-evenly;

`
const Skills = styled.div`

`
const SkillLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  ${media.tablet`
    margin-top: 1rem;
    flex-direction: row;
  `}
`


const Skill = styled.div`

  border-left: 1px solid ${BUTTONACTIVECOLOR};
  border-bottom: 1px solid ${BUTTONACTIVECOLOR};
  border-radius 5px;
  ${media.tablet`
  padding: 0.5rem;
  `}
`


const Wrapper = styled.div`
  line-height: 1.5;
  `


export default CVPage
