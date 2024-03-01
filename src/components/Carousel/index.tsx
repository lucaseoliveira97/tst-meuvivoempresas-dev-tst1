import { useState } from "react";
import { CarouselItemType } from "../../data/technologies";
import CarouselItem from "./CarouselItem";
import { ArrowLeft, CarouselItensContainer, CarouselItensWrapper } from "./style";
import arrowIcon from '../../assets/arrow-icon.svg'
import useCarousel from "../../hooks/useCarousel";

type CarouselProps = {
    itens:CarouselItemType[]
}
 
const Carousel =({ itens }: CarouselProps) =>{
    const [activeItem, prev,next] = useCarousel(itens.length)
    return (
        <CarouselItensContainer>
            <ArrowLeft src={arrowIcon} onClick={prev}/>
            <CarouselItensWrapper>
                {itens.map((item, index) => <CarouselItem key={"carousel-"+index} item={item} index={index} activeItem={activeItem}/>)}
            </CarouselItensWrapper>
            <ArrowLeft src={arrowIcon} onClick={next}/>
        </CarouselItensContainer>
    );
}

export default Carousel