import { CarouselItemType } from "../../data/technologies";
import {CarouselItemContainer, CarouselItemWrapper, CarouselItemWrapperProps } from "./style";
type CarouselItemProps =  {
    item:CarouselItemType

}
 
const CarouselItem =({ item}: CarouselItemProps) =>{
    return (
        
            <CarouselItemWrapper >
                {item.name}
            </CarouselItemWrapper>
       
    );
}
export default CarouselItem