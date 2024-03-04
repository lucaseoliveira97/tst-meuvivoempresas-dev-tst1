import styled from "styled-components";


export const HeaderContainer  = styled.header`
    background-color: ${props => props.theme.background};
    box-shadow: 0px 4px 4px 0px rgb(0,0,0,0.25);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const HeaderWrapper  = styled.div`
    width: 1005px;
    display: flex;
    align-items: center;
    margin: 16px 30px;
    gap: 27px;
`
export const MenuIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;

`
export const VivoLogo = styled.img`
    height: 56px;
    width: 150px;
`
