import { ArrowUp, EnvelopeSimple, InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

export function Footer(){
  return(
    <div className="flex flex-col bg-card">
      <div className="flex px-20 items-center justify-between mt-20">
        <div className="text-4xl font-bold">
          <span>Rocket&nbsp;</span>
          <span className="text-logo">NFTs</span>
        </div>
        <a href="#" className="flex bg-logo p-7">
          <ArrowUp size={24} weight="bold" className="text-black"/>
        </a>
      </div>

      <div className="flex px-20 border-y border-subtitle-color mt-16">

        {/* Newsletter */}
        
        <div className="border-r border-subtitle-color"> 
          <div className="py-16 pr-16 max-w-md flex flex-col gap-5">
            <span className="text-3xl">
              Fique por dentro de&nbsp;<span className="text-logo">todas as novidades</span>
            </span>
            <div>
              <input 
                type="email" 
                placeholder="nft@rocketseat.com.br"
                className="p-5 text-lg bg-backgroundcolor text-subtitle-color outline-none"
              />
              <button className="p-5 bg-white text-black font-bold text-lg hover:bg-gray-300 transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-32 py-16 max-w-4xl w-full">
          <div className="flex flex-col text-subtitle-color gap-3">
            <a href="#" className="font-bold text-white">Empresa</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Time</a>
            <a href="#">Carreira</a>
          </div>
          <div className="flex flex-col text-subtitle-color gap-3">
            <a href="#" className="font-bold text-white">Empresa</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Time</a>
            <a href="#">Carreira</a>
          </div>
          <div className="flex flex-col text-subtitle-color gap-3">
            <a href="#" className="font-bold text-white">Empresa</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Time</a>
            <a href="#">Carreira</a>
          </div>
        </div>
      </div>
      
      <div className="flex px-20 py-16 items-center justify-between text-subtitle-color">
        <a href="">
          <span className="text-xl">
            www.rocketseat.com.br
          </span>
        </a>
        <div className="flex gap-12">
          <a href="#">
            <InstagramLogo size={32}/> 
          </a>
          <a href="#">
            <YoutubeLogo size={32}/> 
          </a>
          <a href="#">
            <TwitterLogo size={32}/> 
          </a>
          <a href="#">
            <EnvelopeSimple size={32}/> 
          </a>
        </div>
      </div>

    </div>
  )
}