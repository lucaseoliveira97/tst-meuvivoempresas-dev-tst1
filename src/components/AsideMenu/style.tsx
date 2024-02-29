import { styled } from "styled-components";

type MenuNavProp = 
{
    openMenu:boolean
}
export const MenuNav = styled.nav`
    width: 420px;
    max-width: 420px;
    height: 100%;
    padding:15px;
    position: relative;
    left: 0;
    background-color: ${props=> props.theme.background};
    transition: transform 0.5s linear;
`
export const MenuWrapper = styled.div<MenuNavProp>`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99;
    left: 0;
    background: #6C6868C9;
    & ${MenuNav}
    {
        transform: translateX(${props => props.openMenu ? "0%" : "-100%"});
    }
    opacity: ${props => props.openMenu ? "1" : "0"};
    visibility: ${props => props.openMenu ? "visible" : "hidden"};;
    transition: opacity 0.5s linear, visibility 0.5s linear;
    
`
