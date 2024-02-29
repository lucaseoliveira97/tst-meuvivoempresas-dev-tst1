import { styled } from "styled-components";

export const MenuWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99;
    left: 0;
    background: #6C6868C9;
    
`
export const MenuNav = styled.nav`
    width: 420px;
    height: 100%;
    padding:15px;
    background-color: ${props=> props.theme.background};
`