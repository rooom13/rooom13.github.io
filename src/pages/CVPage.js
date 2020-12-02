import React from 'react';
import styled from 'styled-components'
import Link from '../components/Link'
import CVen_path from '../CV/CV_RomanRey_en.pdf'
import media from '../media';
import { BUTTONHOVERCOLOR, BUTTONACTIVECOLOR, SECONDARYCOLOR } from '../Colors';
import Emoji from '../components/Emoji';

function CVPage() {
  const linkedinLink = "https://www.linkedin.com/in/roman-rey"

  return (
    <Wrapper >
      {/* <PDFmessage>Check and download a <b>PDF version</b> of my CV <Link href={CVen_path} target="_blank" >here!</Link></PDFmessage> */}
      <PDFmessage>Check it on LinkedIn <Link href={linkedinLink} target="_blank" >here!</Link></PDFmessage>
      <h3>Skills</h3>
      <Skills >
        <SkillLine >
          <Skill >
            <H4>Data Science</H4>
            Anomaly detection, False positive reduction<br /> (Un)Supervised learning, Sklearn, Pandas, TensorFlow/Pytorch
        </Skill >
          <Skill >
            <H4>Data Engineering</H4>
            Datalake management, Athena, parallel processing, Kafka 
        </Skill >
          <Skill >
            <H4>Cloud Computing</H4>
            Docker, Kubernetes, AWS
        </Skill >
        </SkillLine>
        <SkillLine>
          <Skill >
            <H4>Software Engineering</H4>
            Software Design, OOP, python, testing CI/CD, Java
        </Skill >
          <Skill >
            <H4>Web Development</H4>
            Node.js, HTML, Javascript, CSS, React.js
          </Skill >
          <Skill >
            <H4>Database Management</H4>
            SQL & NoSQL, MySQL, Redis, MongoDB, ElasticSearh
          </Skill >
          <Skill hideMobile>
            <H4>Coming soon ...</H4>
            Who knows what I will come with
          </Skill >
        </SkillLine>
      </Skills>

      <h3>Languages (4) </h3>
      <Languages>
        <Lan>
          <Flag symbol='🇬🇧' label='Great Britain flag' />
          <div>English</div>
        </Lan>
        <Lan>
          <Flag symbol='🇩🇪' label='German flag' />
          <div>German</div>
        </Lan>
        <Lan>
          <Flag symbol='🇪🇸' label='Spanish flag' />
          <div>Spanish</div>
        </Lan>
        <Lan>
          <Flag symbol='🏴󠁥󠁳󠁣󠁴󠁿' label='Catalan flag' title="Couldn't find a catalan flag Emoji :S" />
          <div>Catalan</div>
        </Lan>
      </Languages>
    </Wrapper>
  )
}

const Flag = styled(Emoji)`
  font-size: 2rem;
  color: red;
`

const Lan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const H4 = styled.h4`
  color: ${SECONDARYCOLOR};
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

const Skills = styled.div``

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

  ${props => props.hideMobile && `
    display: none;
  `};

  border-left: 1px solid ${BUTTONACTIVECOLOR};
  border-bottom: 1px solid ${BUTTONACTIVECOLOR};
  border-radius 5px;


  ${media.tablet`
    padding: 0.5rem;
    display: unset;
  `}
`

const Wrapper = styled.div`
  line-height: 1.5;
  `
export default CVPage
