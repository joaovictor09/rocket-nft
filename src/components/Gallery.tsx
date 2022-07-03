import Galery1 from "../assets/galeria-1.png";
import Galery2 from "../assets/galeria-2.png";
import Galery3 from "../assets/galeria-3.png";
import Galery4 from "../assets/galeria-4.png";
import Galery5 from "../assets/galeria-5.png";
import Galery6 from "../assets/galeria-6.png";
import Galery7 from "../assets/galeria-7.png";
import Galery8 from "../assets/galeria-8.png";

export function Gallery(){

    const photos = [Galery1, Galery2, Galery3, Galery4, Galery5, Galery6, Galery7, Galery8 ]

    return (
        <div className="flex flex-col max-w-f justify-between items-center mt-24 mx-20 gap-16">
            {/* <div className="flex w-max max-w-max relative">
                {photos.map(photo => {
                    return(
                        <img className="" src={photo} alt="" />
                    )
                })}
            </div> */}
            
            <div className="flex gap-6 w-full h-auto justify-center">
                <img className="w-full h-auto aspect-auto" src={Galery1} alt="" />
                <img className="w-full h-auto aspect-auto" src={Galery2} alt="" />
                <img className="w-full h-auto aspect-auto" src={Galery3} alt="" />
                <img className="w-full h-auto aspect-auto" src={Galery4} alt="" />
            </div>

            <div className="flex gap-6 w-full h-auto justify-center">
                <img className="w-full h-auto aspect-auto" src={Galery5} alt="" />
                <img className="w-full h-auto aspect-auto" src={Galery6} alt="" />
                <img className="w-full h-auto aspect-auto" src={Galery7} alt="" />
                <img className="w-full h-auto aspect-auto" src={Galery8} alt="" />
            </div>
        </div>
    )
}