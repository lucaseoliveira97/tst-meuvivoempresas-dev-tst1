import styled from "styled-components";


export const HeaderContainer  = styled.header`
    background-color: ${props => props.theme.background};
    box-shadow: 0px 4px 4px 0px rgb(0,0,0,0.25);
    width: 100%;
    position: relative;

`
export const HeaderWrapper  = styled.div`
    max-width: 1005px;
    display: flex;
    align-items: center;
    margin: auto;
`

export const MenuIcon = styled.img`
    margin:38px 27px 32px 30px;

`
export const VivoLogo = styled.img`
    height: 56px;
    width: 150px;
`
