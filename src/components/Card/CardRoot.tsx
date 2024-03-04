import { ReactNode } from "react";
import { CardWrapper } from "./style";

type CardRootProps = {
 children: ReactNode
}
 
const CardRoot =({ children }: CardRootProps) =>{
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    );
}
export default CardRoot