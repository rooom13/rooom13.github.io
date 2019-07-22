import React from 'react';
import styled from 'styled-components'
import media from '../media'
import { BUTTONHOVERCOLOR, FONTCOLOR } from '../Colors';
import Link from './Link'

export default function () {

    const thesisLink = 'https://github.com/rooom13/recommendation-system-thesis'
    const botLink = 'https://github.com/rooom13/deutschlerne_bot'
    const visualsLink = 'https://www.youtube.com/watch?v=jMQ0V9Dbbyg'
    const runnerLink = 'http://www.genmagic.org/videojuegos/mates/mathicrunner'
    const platformerLink = 'http://genmagic.org/videojuegos/mates/mathicplatformer1'
    const animationsLink = 'https://www.youtube.com/playlist?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI'

    return (


        <Timeline >
            <ContainerLeft >
                <Content >
                    <h2><Link href={thesisLink} >Recommendation Systems Thesis</Link> | 2019</h2>
                    <div>
                        Thesis about <b>Recommendation Systems</b>. In this thesis a deep evaluation of a collaborative filtering method, conten-based method and hybrid approach has been carry out.
                        </div>
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2><Link href={botLink}> @dailyWord_bot</Link> | 2018</h2>
                    <div>
                        Telegram Bot to help Spanish speakers learn German & vice-versa developed using <b>Node.js</b> and <b>Redis</b>.
                        <p>Deployed using <b>Cloud Computing</b> techniques with <b>Docker</b> as a container platform.</p>
                    </div>

                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2><Link href={visualsLink}>"In the Universe" visuals</Link> | 2018</h2>
                    <p> Lyric visuals for the videoclip of "In the Universe" song. The visuals were developed using Javascript's canvas with the challenge of synchronizing the audio, lyrics and visual effects.
                        </p>
                    <StyledIframe
                        src={'https://www.youtube.com/embed/jMQ0V9Dbbyg'}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2> <Link href={runnerLink}>Mathic Runner</Link> | 2014</h2>
                    <p>Web responsive videogame developed for <i>genmagic.net</i>an educational platform of research and development of interactive applications.</p>
                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2><Link href={platformerLink}>Mathic Platformer</Link> | 2013</h2>
                    <p>Web app videogame for a research project that approaches education and gamification.
                        </p>
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2><Link href={animationsLink}>Animations</Link> | Long time ago</h2>
                    <p> At an early age I spent my time doing animations using <b>Adobe Flash</b>.
                    <StyledIframe
                            src="https://www.youtube.com/embed/videoseries?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </p>
                </Content>
            </ContainerRight>
        </Timeline>
    )
}


const StyledIframe=styled.iframe`
    border-radius: 5px;
    width: 100%;
`


// Timeline stuff ---->
const Content = styled.div`
    padding: 1rem;
    border-radius: 10px;
`

const Container = styled.div`
    > div {
        border-left: 1px solid;
        border-bottom: 1px solid;
    }

    box-sizing: border-box;

    z-index: 0;
    margin-top: 1rem;
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    position: relative;
    left: 0%;

    ${media.tablet`
        margin-top: 0;
        width: 50%;
        padding: 0.6rem 2.5rem;
    `}

    &:after {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        right: -1rem;
        background-color: ${FONTCOLOR};
        border: 4px solid darkred;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
`
const ContainerRight = styled(Container)`
    &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        left: 60px;
        border: medium solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent ${FONTCOLOR} transparent transparent;
    }
    
    &:after {
        left: 15px;
    }
    
    ${media.tablet`
        left: 50%;
        &:before {
            left: 30px;
        }
        &:after {
            left: -16px; 
        }
    `}
`

const ContainerLeft = styled(Container)`
    &:before {
        left: 60px;
        border: medium solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent ${FONTCOLOR} transparent transparent;
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        right: 30px;
    }
    
    &:after {
        left: 15px;
    }
    
    ${media.tablet`

        > div {
            border-left: none;
            border-right: 1px solid;
        }
        &:before {
            left: unset;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent ${FONTCOLOR};
        }
        &:after {
            left: unset;
        }
    `}
`


const Timeline = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    
    &:after {
        content: '';
        position: absolute;
        width: 6px;
        border-left: 5px dashed;
        top: 0;
        bottom: 0;
        left: 31px;
        margin-left: -3px;
        ${media.tablet`
            left: 50%;
        `}
    }
`