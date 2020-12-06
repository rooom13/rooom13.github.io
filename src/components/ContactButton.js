import React from 'react';
import styled from 'styled-components'
import Link from './Link'
import { FONTCOLOR, BUTTONCOLOR, BUTTONHOVERCOLOR, BUTTONACTIVECOLOR } from '../Colors';

export default function ContactButton(props) {

    const {link, iconClass} = props
    const linkText = props.children

    return (
        <Wrapper>
            <StyledButton href={link}>
                <i className={iconClass} aria-hidden="true"></i>
            </StyledButton>
            <LinkText href={link}>  {linkText}</LinkText>
        </Wrapper>
    )
}

const LinkText = styled(Link)`
    font-style: italic;
`


const StyledButton = styled.a`
    display:flex;
    justify-content:center;
    align-items: center;

    >i {color: ${FONTCOLOR};}
    background-color: ${BUTTONCOLOR};
    &:hover{
        background-color: ${BUTTONHOVERCOLOR};
    }
    &:active{
        background-color: ${BUTTONACTIVECOLOR};
    }

    border-radius: 25px;
    text-decoration: none; 
    decoration: none; 

    margin-top: 1rem;
    margin-bottom: 0.5rem;
    width: 7rem;
    height: 7rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`