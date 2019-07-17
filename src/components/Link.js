
import styled from 'styled-components'
import { VISITEDLINKCOLOR, FONTCOLOR } from '../Colors';

export default styled.a`
  font-family: monospace;

  color: ${FONTCOLOR};
  &:visited {
      color: ${VISITEDLINKCOLOR};
  }

`