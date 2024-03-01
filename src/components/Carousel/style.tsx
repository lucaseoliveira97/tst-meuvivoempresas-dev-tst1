import { styled } from "styled-components";

export const CarouselItensContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
`
export const CarouselItensWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    overflow: hidden;
    width: calc((122px*3 + (16px*2)));
`
export const ArrowLeft = styled.img`

`
export type CarouselItemWrapperProps = {
    index:number,
    activeItem:number,
}

export const CarouselItemWrapper = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 15px;
    background-color: ${props=>props.theme.primary};
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: transform 0.3s linear;

`
const teste = 2;
export const CarouselItemContainer= styled.div<CarouselItemWrapperProps>`
    height: 150px;
    width: 100%;
    transition: transform 0.3s linear;
    transform: translateX(calc((100% + 16px) * ${props => -props.activeItem+1}));
    & ${CarouselItemWrapper}
    {
        opacity: ${props=>props.index !== props.activeItem ? "0.33" : "1"};
        transform: scale(${props=> props.index !== props.activeItem? "0.5737" : "1"});
    }
`
