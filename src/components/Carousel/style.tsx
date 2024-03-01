import { styled } from "styled-components";

export const CarouselItensWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`

type CarouselItemWrapperProps = {
    inactive?:boolean
}
export const CarouselItemWrapper = styled.div<CarouselItemWrapperProps>`
    height: 150px;
    width: 122px;
    border-radius: 15px;
    background-color: ${props=>props.theme.primary};
    box-shadow: 0px 4px 4px 0px #00000040;
    opacity: ${props=>props.inactive ? "0.33" : "1"};
    transform: scale(${prosp=> prosp.inactive? "0.5737" : "1"});


`