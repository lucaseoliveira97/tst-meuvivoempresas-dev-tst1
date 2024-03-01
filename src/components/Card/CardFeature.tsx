import { CardFeatureTitle, CardFeatureWrapper } from "./style";

type CardFeatureProps = {
 feature:string
}
 
const CardFeature =({ feature }: CardFeatureProps) =>{
    return (
        <CardFeatureWrapper>
            <CardFeatureTitle>
                {feature}
            </CardFeatureTitle>     
        </CardFeatureWrapper>
    );
}

export default CardFeature