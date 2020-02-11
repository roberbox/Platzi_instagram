import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'
export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display:flex;
    height: 50px;
    justify-content:space-around;
    max-width: 0 auto;
    max-width: 500px;
    position:fixed;
    width: 100%;
    z-index: 100;
`
export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content:center;
    text-decoration: none;
    width: 100%;

    &[aria-current] {
        color: black;

        &:after {
            ${fadeIn({ time: '0.5s' })};
            content:'.';
            position: absolute;
            bottom: 8px;
            font-size:34px;
            line-height: 20px;
        }
    }

`
