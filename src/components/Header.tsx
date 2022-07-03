import { Metamask } from "./Metamask";

export function Header() {
    return (
        <div className="w-full w-max[1440px] h-max flex items-center">
            <div className="w-full mx-20 flex items-center justify-between ">
                <div className="py-14 font-bold text-4xl">
                    <span className="">Rocket </span>
                    <span className="text-logo">NFTs</span>
                </div>

                <div className="flex justify-center gap-16">
                    <a 
                        href="#" 
                        className="text-lg"
                    >
                        Comprar NFT
                    </a>

                    <a href="#">
                        Sobre
                    </a>

                    <a href="#">
                        FAQ
                    </a>
                </div>

                <div>
                    <button className="flex items-center gap-4 py-3 px-6 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
                        <Metamask />
                        <span>
                            Conectar carteira
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}