import { styled } from "styled-components";

export const CardWrapper = styled.section`
    height:100%;
    width: 100%;
    position: relative;
    border-radius: 10px;
    background-color: ${props=>props.theme.background};
    box-shadow: 0px 4px 20px 0px #00000040;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: transform 0.2s linear;
    &:hover
    {
        transform: translateY(-5px);
    }

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
    font-size: clamp(1.125rem, 0.5694rem + 1.4815vw, 1.5rem);
    font-weight: 500;
    line-height: clamp(1.625rem, 1.0694rem + 1.4815vw, 2rem);
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
export const CardFooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
`

export const CardFeatureWrapper = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    top: -13px;
`
export const CardFeatureTitle = styled.div`
    width: 81%;
    border-radius: 5px;
    height: 22px;
    font-size: clamp(0.5rem, 0.3148rem + 0.4938vw, 0.625rem);
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-align: left;
    text-align: center;
    color: black;
    background-color: ${props=> props.theme.secondary};

`