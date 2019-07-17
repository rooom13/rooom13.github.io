import React from 'react';
import styled from 'styled-components'
import media from '../media'
import { BUTTONCOLOR, FONTCOLOR } from '../Colors';

export default function () {

    return (

        <Timeline >
            <ContainerLeft>
                <Content >
                    <h2>2017</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2>2016</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2>2015</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2>2012</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </Content>
            </ContainerRight>
            <ContainerLeft >
                <Content >
                    <h2>2011</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </Content>
            </ContainerLeft>
            <ContainerRight >
                <Content >
                    <h2>Mathic Platformer2013</h2>
                    <p>Web app videogame Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </Content>
            </ContainerRight>
        </Timeline>
    )
}



const Content = styled.div`

    padding: 1rem;
    // background-color: ${'N'};
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