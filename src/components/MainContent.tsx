import avatars from "../assets/group-avatars.png"
import { Badge } from "./Badge"

export function MainContent(){
    return(
        <div className="flex justify-between items-center mt-24 mx-20 gap-10">
            <div className="flex flex-col gap-y-14 max-w-md items">
                <p>
                    Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
                </p>

                <div className="flex items-end gap-2">
                    <img src={avatars} alt="" />
                    <div>
                        <span className="block font-bold">
                            +10
                        </span>

                        <span>
                            Artistas selecionados 
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-5xl font-bold h-max w-1/3 leading-tight">
                <span className="text-5xl font-bold">
                    Descubra a verdadeira arte digital e colecione diversas&nbsp;
                </span>

                <span className="text-logo block">
                     NFTs
                </span>
            </div>

            <div>
                <Badge />
            </div>
        </div> 
    )
}