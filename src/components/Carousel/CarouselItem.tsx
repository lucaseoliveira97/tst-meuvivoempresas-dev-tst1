import { CarouselItemType } from "../../data/technologies";
import { CarouselItemTitle, CarouselItemWrapper } from "./style";
type CarouselItemProps =  {
    item:CarouselItemType

}
 
const CarouselItem =({ item}: CarouselItemProps) =>{
    return (
            <CarouselItemWrapper >
                <CarouselItemTitle>{item.name}</CarouselItemTitle>
                {item.icon}
            </CarouselItemWrapper>  
    );
}
export default CarouselItem