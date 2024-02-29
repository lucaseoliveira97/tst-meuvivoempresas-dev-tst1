import { CardHeaderWrapper, CardSubTitle, CardTitle, WifiIcon } from "./style";
import wifiIcon from "../../assets/wifi-icon.svg"

type CardHeaderProps = {
 cardTitle:string,
 cardSubTitle:string
}
 
const CardHeader =({ cardTitle, cardSubTitle }: CardHeaderProps) =>{
    return (
        <CardHeaderWrapper>
            <WifiIcon src={wifiIcon}/>
            <CardTitle>{cardTitle}</CardTitle>   
            <CardSubTitle>{cardSubTitle}</CardSubTitle>
        </CardHeaderWrapper>
    );
}

export default CardHeader