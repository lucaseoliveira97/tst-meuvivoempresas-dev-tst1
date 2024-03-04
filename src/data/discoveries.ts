type Discovery =
{
    discoveryTitle:string,
    discoveryBonus:string,
    discoveryFeature?:string,
    discoveryLink:string,
}

const discoveries:Discovery[] = 
[
    {
        discoveryTitle:"200 Mega",
        discoveryBonus:"+Wi-fi e Modem grátis",
        discoveryLink:"#"
    },
    {
        discoveryTitle:"300 Mega",
        discoveryBonus:"+Wi-fi e Modem grátis",
        discoveryLink:"#",
        discoveryFeature:"O MELHOR CUSTO BENEFÍCIO"
    },
    {
        discoveryTitle:"600 Mega",
        discoveryBonus:"+Wi-fi e Modem grátis",
        discoveryLink:"#",
        discoveryFeature:"O MELHOR CUSTO BENEFÍCIO"
    },
]

export default discoveries;