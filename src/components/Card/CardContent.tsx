import { CardContentWrapper } from "./style";

type CardContentProps = {
    content?:string
}
 
const CardContent =({ content="" }: CardContentProps) =>{
    return (
        <CardContentWrapper>
            {content}
        </CardContentWrapper>
    );
}
export default CardContent