import { CarouselItemType } from "../../data/technologies";
import { CarouselItemTitle, CarouselItemWrapper } from "./style";
type CarouselItemProps =  {
    item:CarouselItemType

}
 
const CarouselItem =({ item}: CarouselItemProps) =>{
    return (
            <CarouselItemWrapper >
                <CarouselItemTitle>{item.name}</CarouselItemTitle>
            </CarouselItemWrapper>  
    );
}
export default CarouselItem