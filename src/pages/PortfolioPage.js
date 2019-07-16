import React from 'react';
import styled from 'styled-components'
import Timeline from '../components/TimeLine'

export default function () {
    return (

        <Wrapper >

            <Timeline />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    line-height: 1.5
  `


