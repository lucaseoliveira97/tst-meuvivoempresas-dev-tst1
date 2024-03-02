import { styled } from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 181px 32px;
`
export const CarouselItensWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow: hidden;
    width: calc((122px*3 + (16px*2)));
    padding: 10px 0;
`
type ArrowIconProps = 
{
    $inactiveNav:boolean
}
export const ArrowLeft = styled.img<ArrowIconProps>`
    cursor: ${props=> props.$inactiveNav ? "default" : "pointer"};
    width: 11.67px;
    height: 19.8px;
    opacity: ${props=> props.$inactiveNav ? "0.3" : "1"};
    &:hover
    {
        opacity:${props=> props.$inactiveNav ? "0.3" : "0.7"};
    }
`
export const ArrowRight = styled(ArrowLeft)`
    transform: rotate(180deg);
`
export type CarouselItemWrapperProps = {
    index:number,
    $activeItem:number,
}
export const CarouselItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
    width: 122px;
    border-radius: 15px;
    background-color: ${props=>props.theme.primary};
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: transform 0.3s linear, opacity 0.3s linear;

`
export const CarouselItemTitle = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    transition: opacity 0.4s linear;
    color: ${props=>props.theme.background};
`
export const CarouselItemContainer= styled.div<CarouselItemWrapperProps>`
    height: 150px;
    width: 100%;
    transition: transform 0.3s linear;
    transform: translateX(calc((100% + 16px) * ${props => -props.$activeItem+1}));
    & ${CarouselItemWrapper}
    {
        opacity: ${props=>props.index !== props.$activeItem ? "0.33" : "1"};
        transform: scale(${props=> props.index !== props.$activeItem? "0.5737" : "1"});
        & ${CarouselItemTitle}{
            opacity: ${props=>props.index !== props.$activeItem ? "0" : "1"};
        }
    }
`
