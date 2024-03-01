import { useState } from "react";
import { CarouselItemType } from "../../data/technologies";
import CarouselItem from "./CarouselItem";
import { ArrowLeft, ArrowRight,CarouselContainer, CarouselItensWrapper, CarouselItemContainer } from "./style";
import arrowIcon from '../../assets/arrow-icon.svg'
import useCarousel from "../../hooks/useCarousel";

type CarouselProps = {
    itens:CarouselItemType[]
}
const Carousel =({ itens }: CarouselProps) =>{
    const [activeItem, prev,next] = useCarousel(itens.length)

    return (
        <CarouselContainer>
            <ArrowLeft src={arrowIcon} onClick={prev} $inactiveNav={activeItem==0}/>
            <CarouselItensWrapper>
                {itens.map((item, index) => {
                    return(
                        <CarouselItemContainer key={"carousel-item"+index} index={index} $activeItem={activeItem}>
                            <CarouselItem key={"carousel-"+index} item={item}/>
                        </CarouselItemContainer>)
                })}
            </CarouselItensWrapper>
            <ArrowRight src={arrowIcon} onClick={next} $inactiveNav={activeItem==itens.length-1}/>
        </CarouselContainer>
    );
}

export default Carousel