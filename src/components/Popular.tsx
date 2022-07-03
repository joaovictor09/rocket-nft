import { NftCard } from "./NftCard";
import astronauta1 from "../assets/astronauta-1.png"

export function Popular(){
    return(
        <div className="w-full flex flex-col gap-40 px-20">
            <strong className="text-5xl">
                <span className="text-logo">Populares</span> da semana
            </strong>

            <div className="flex w-full justify-between gap-12">

                <div className="w-maxborder-r">
                    <NftCard author="João Victor" title="Astronauta 1" value="1.50 RKT" imageSource={astronauta1}/>
                    <NftCard author="João Victor" title="Astronauta 1" value="1.50 RKT" imageSource={astronauta1}/>
                </div>
                <div className="border-r"></div>
                <div>
                    <NftCard author="João Victor" title="Astronauta 1" value="1.50 RKT" imageSource={astronauta1}/>
                    <NftCard author="João Victor" title="Astronauta 1" value="1.50 RKT" imageSource={astronauta1}/>
                </div>

                <div className="border-r"></div>
                <div>
                    <NftCard author="João Victor" title="Astronauta 1" value="1.50 RKT" imageSource={astronauta1}/>
                    <NftCard author="João Victor" title="Astronauta 1" value="1.50 RKT" imageSource={astronauta1}/>
                </div>

            </div>
        </div>
    )
}