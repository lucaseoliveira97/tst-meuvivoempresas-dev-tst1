import { styled } from "styled-components";

export const CardWrapper = styled.section`
    height:100%;
    width: 100%;
    position: relative;
    width: calc(100%/3);
    border-radius: 10px;
    background-color: ${props=>props.theme.background};
    box-shadow: 0px 4px 20px 0px #00000040;
    display: flex;
    flex-direction: column;
    gap: 5px;

`

export const CardHeaderWrapper = styled.header`
    padding: 14px 14px 0 14px;
    width: 100%;
    display: grid;
    grid-template-columns: 34.29px auto; 
    align-items: center;
    gap: 0 11.71px;
`
export const CardTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.1em;
    text-align: left;
    color: ${props => props.theme.primary};
    margin: 0;
    padding:0;
`
export const CardSubTitle = styled.span`
    font-size: 10px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-align: left;
    color: ${props => props.theme.primary};
    margin: 0;
    grid-column: 2;
`

export const WifiIcon = styled.img`
    margin-left: 2px;
    width: 34.29px;
    height: 24px;
`

export const CardContentWrapper = styled.div`
    height: 75px;
    background-color: #F5F0F0;
`