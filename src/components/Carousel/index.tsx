import CarouselItem from "./CarouselItem";
import { CarouselItensWrapper } from "./style";

type CarouselProps = {
 
}
 
const Carousel =({  }: CarouselProps) =>{
    return (
        <CarouselItensWrapper>
            <CarouselItem/>
            <CarouselItem inactive={false}/>
            <CarouselItem/>
        </CarouselItensWrapper>
    );
}

export default Carousel