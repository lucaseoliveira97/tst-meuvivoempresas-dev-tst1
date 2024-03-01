import { CarouselItemType } from "../../data/technologies";
import {CarouselItemContainer, CarouselItemWrapper, CarouselItemWrapperProps } from "./style";
type CarouselItemProps = CarouselItemWrapperProps & {
    item:CarouselItemType

}
 
const CarouselItem =({ item,index,activeItem }: CarouselItemProps) =>{
    return (
        <CarouselItemContainer index={index} activeItem={activeItem}>
            <CarouselItemWrapper >
                {item.name}
            </CarouselItemWrapper>
        </CarouselItemContainer>
    );
}
export default CarouselItem