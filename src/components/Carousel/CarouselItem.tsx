import { CarouselItemWrapper } from "./style";

type CarouselItemProps = {
 inactive?:boolean
}
 
const CarouselItem =({  inactive=true}: CarouselItemProps) =>{
    return (
        <CarouselItemWrapper inactive={inactive}>
            
        </CarouselItemWrapper>
    );
}
export default CarouselItem