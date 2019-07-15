import React from 'react';
import styled from 'styled-components'
import media from '../media'

export default function () {
    return (

        <Wrapper >

            <div><b>Skills:</b></div>

            <TimeLineWrapper>
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
                        <h2>2007</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </Content>
                </ContainerRight>
            </Timeline>
            </TimeLineWrapper>





        </Wrapper>

    )
}

const TimeLineWrapper = styled.div`
    position: ;
`

const Content = styled.div`
    padding: 20px 30px;
    background-color: darkgrey;
    position: relative;
    border-radius: 6px;


`

const Container = styled.div`
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;

    &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
`
const ContainerRight = styled(Container)`
    left: 50%;

    &::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        /* z-index: 1; */
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    &:after {
        left: -16px;

    }
`

const ContainerLeft = styled(Container)`
    left: 0%;
    
    &:before {
        
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        /* z-index: 1; */
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
    }

`


const Timeline = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    &:after {
    
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    // ${media.tablet`
    //     left: 50%;
    // `}

    }
`


const Wrapper = styled.div`
    display: flex;
    line-height: 1.5
  `

