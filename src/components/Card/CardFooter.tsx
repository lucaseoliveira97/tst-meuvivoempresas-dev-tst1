import { Link } from "../ui/Link";
import { CardFooterWrapper } from "./style";

type CardFooterProps = {
 
}
 
const CardFooter =({  }: CardFooterProps) =>{
    return (
        <CardFooterWrapper>
            <Link>Consultar cobertura</Link>
        </CardFooterWrapper>
    );
}

export default CardFooter