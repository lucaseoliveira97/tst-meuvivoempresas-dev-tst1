import { useState } from "react";
import { CarouselItemType } from "../../data/technologies";
import CarouselItem from "./CarouselItem";
import { ArrowLeft, CarouselItensContainer, CarouselItensWrapper } from "./style";
import arrowIcon from '../../assets/arrow-icon.svg'

type CarouselProps = {
    itens:CarouselItemType[]
}
 
const Carousel =({ itens }: CarouselProps) =>{
    const [activeItem, setActiveItem] = useState(0)
    return (
        <CarouselItensContainer>
            <ArrowLeft src={arrowIcon} onClick={() => setActiveItem(prev => prev+1)}/>
            <CarouselItensWrapper>
                {itens.map((item, index) => <CarouselItem key={"carousel-"+index} item={item} index={index} activeItem={activeItem}/>)}
            </CarouselItensWrapper>
        </CarouselItensContainer>
    );
}

export default Carousel