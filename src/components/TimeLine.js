import React from 'react';
import styled from 'styled-components'
import media from '../media'
import { FONTCOLOR, SECONDARYCOLOR } from '../Colors';
import Link from './Link'
import mathicRunnerPicPath from '../images/mathic-runner.jpg'
import mathicPlatformerPicPath from '../images/mathic-platformer.jpg'
import samplesLooperPicPath from '../images/samples-looper.jpg'

export default function () {

    const thesisLink = 'https://github.com/rooom13/recommendation-system-thesis'
    const dailyWordBotLink = 'https://github.com/rooom13/deutschlerne_bot'
    const topTweetsBotLink = 'https://telegram.me/top_tweets_bot'
    const samplesLooperLink = 'http://rooom13.github.io/samples-looper'
    const visualsLink = 'https://www.youtube.com/watch?v=jMQ0V9Dbbyg'
    const runnerLink = 'http://www.genmagic.org/videojuegos/mates/mathicrunner'
    const platformerLink = 'http://genmagic.org/videojuegos/mates/mathicplatformer1'
    const animationsLink = 'https://www.youtube.com/playlist?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI'

    return (


        <Timeline >
            <ContainerLeft >
                <Content >
                    <h2><Link target="blank" href={topTweetsBotLink}> @top_tweets_bot</Link> | 2021 - {new Date().getFullYear()}</h2>
                    <div>
                        Investment psychology in a connected society can be reflected on people's most popular thoughts. @top_tweets_bot provides the top tweets of topics of your choice to make you stay up to date with the latest announcements.
                        <p>The bot connects to the Twitter API to retrieve the most significant tweets.</p>
                    </div>
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2><Link target="blank" href={samplesLooperLink}> Samples Looper</Link> | 2020 </h2>
                    <div>
                        I wanted to experiment with the Web Audio API so I developed a web app for mixing samples.
                        The app allows you to load a set of samples and play them along.
                        <a target="blank" href={samplesLooperLink}><StyledImage src={samplesLooperPicPath} /></a>
                        <p>The app can be controlled with the keyboard since mixing needs changing settings quite fast, which might not be so comfortable using the mouse.</p>
                    </div>
                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2><Link target="blank" href={dailyWordBotLink}> @dailyWord_bot</Link> | 2018 - {new Date().getFullYear()}</h2>
                    <div>
                        Telegram Bot to help expanding Germand/Spanish vocabulary.
                        <p>Developed using <b>Python</b> and <b>Redis</b> & deployed using <b>Cloud Computing</b> techniques with <b>Docker</b> as a container platform.</p>
                    </div>

                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2><Link target="blank" href={thesisLink} >Recommendation Systems Thesis</Link> | 2019</h2>
                    <div>
                        Evaluation of a <b>collaborative filtering</b> method, <b>content-based</b> method and hybrid approach applied to musical artist recommendation.
                    </div>
                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2><Link target="blank" href={visualsLink}>"In the Universe" visuals</Link> | 2018</h2>
                    <p> Lyric visuals for the videoclip of <i>"In the Universe"</i> song. The visuals were developed using Javascript's canvas with the challenge of synchronizing the audio, lyrics and visual effects.</p>
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
                    <h2> <Link target="blank" href={runnerLink}>Mathic Runner</Link> | 2014</h2>
                    <p>Web responsive videogame developed for <i>genmagic.net</i> an educational platform of research and development of interactive applications.</p>
                    <a target="blank" href={runnerLink}><StyledImage src={mathicRunnerPicPath} /></a>
                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2><Link target="blank" href={platformerLink}>Mathic Platformer</Link> | 2013</h2>
                    <p>Web app videogame for a research project that approaches education and gamification.</p>
                    <a href={platformerLink}><StyledImage src={mathicPlatformerPicPath} /></a >
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2><Link target="blank" href={animationsLink}>Animations</Link> | Long time ago</h2>
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
        </Timeline >
    )
}

const StyledImage = styled.img`
    border-radius: 5px;
    width: 100%;
`


const StyledIframe = styled.iframe`
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
        padding: 0.6rem 0rem;
    `}

    &:after {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        right: -1rem;
        background-color: ${FONTCOLOR};
        border: 4px solid ${SECONDARYCOLOR};
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

        > div {
            margin-left: 2.5rem;
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
        margin-right: 2.5rem;
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