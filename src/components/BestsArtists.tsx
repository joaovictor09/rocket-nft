import { ArrowUpRight } from "phosphor-react";
import { Arrow } from "./Arrow";
import { ArtistsCard } from "./ArtistsCard";

export function BestsArtists(){


    return (
        <div className="flex flex-col items-center px-20">
            <strong className="text-5xl">
                Melhores <span className="text-logo">artistas</span>
            </strong>

            <div className="w-full grid grid-cols-3 grid-rows-2 gap-28 mt-32">
                <ArtistsCard principal={false}/>
                <ArtistsCard principal={true}/>
                <ArtistsCard principal={false}/>
                <ArtistsCard principal={false}/>
                <ArtistsCard principal={false}/>
                <ArtistsCard principal={false}/>
            </div>

            <a href="#" className="flex items-center mt-14 gap-5">
                <span>Ver todos os artistas</span>
                <ArrowUpRight size={26} className="text-logo" weight="bold"/>
            </a>


        </div>
    )
}