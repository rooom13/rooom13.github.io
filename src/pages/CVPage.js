import React from 'react';
import styled from 'styled-components'
import Link from '../components/Link'
import CVen_path from '../CV/CV_RomanRey_en.pdf'

function CVPage() {
    return (

        <Wrapper >
        
        <div><i>Check and download a <b>PDF version</b> of my CV <Link href={CVen_path}>here!</Link></i></div>
        
     
 
      

        </Wrapper>

    )
}


const Wrapper = styled.div`
  line-height: 1.5
  `


export default CVPage
