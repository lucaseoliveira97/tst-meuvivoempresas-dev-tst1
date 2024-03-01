import { styled } from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 181px;
`
export const CarouselItensWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow: hidden;
    width: calc((122px*3 + (16px*2)));
    padding: 10px 0;
`

export const ArrowLeft = styled.img`
    cursor: pointer;
    width: 11.67px;
    height: 19.8px;
`
export const ArrowRight = styled(ArrowLeft)`
    transform: rotate(180deg);
`

export type CarouselItemWrapperProps = {
    index:number,
    activeItem:number,
}

export const CarouselItemWrapper = styled.div`
    height: 100%;
    width: 122px;
    border-radius: 15px;
    background-color: ${props=>props.theme.primary};
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: transform 0.3s linear, opacity 0.3s linear;

`
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
