import { ReactNode } from "react";
import Icon5G from "../assets/5gIcon";
import IconESim from "../assets/eSimIcon";
import IconSimCard from "../assets/simCardIcon";

export type CarouselItemType = {
    name: string;
    icon: ReactNode;
}
export const technologies:CarouselItemType[] = [
    {
        name:"simCard",
        icon:<IconSimCard/>
    },
    {
        name:"Esim",
        icon:<IconESim/>
    },
    {
        name:"Tecnologia",
        icon:<Icon5G/>
    }
]
