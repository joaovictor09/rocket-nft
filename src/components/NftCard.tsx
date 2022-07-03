import { ArrowUpRight } from "phosphor-react";
import { Arrow } from "./Arrow";

interface NftCardProps {
    title: string;
    author: string;
    value: string;
    imageSource: string;
}

export function NftCard(props: NftCardProps){
    return(
        <div className="w-max flex flex-col">
            <div className="w-full flex items-center justify-between">
                <strong className="text-3xl font-normal">
                    {props.title}
                </strong>
                <a href="#">
                <ArrowUpRight size={50} className="text-logo" weight="bold"/>
                </a>
            </div>
            <div className="flex justify-between mt-10">
                <span className="text-subtitle-color text-xl font-semibold">
                    {props.author}
                </span>
                <span className="text-logo text-xl">
                    {props.value}
                </span>
            </div>
            <img 
                src={props.imageSource} alt="" 
                className="mt-5"
            />
        </div>
    )
}