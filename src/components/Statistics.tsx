import banner from "../assets/banner.png"

export function Statistics(){
    return(
        <div className="flex w-full border-b border-subtitle-color"> 
            <div className="flex flex-col ml-20 py-32 px-16 border-r items-center justify-center gap-16">
                <div className="flex flex-col justify-center items-center">
                    <span className="font-bold text-5xl">
                        10K+
                    </span>
                    <span>
                        Artes
                    </span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <span className="font-bold text-5xl">
                        200+
                    </span>
                    <span>
                        Vendas
                    </span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <span className="font-bold text-5xl">
                        20
                    </span>
                    <span>
                        Artistas
                    </span>
                </div>
            </div>

            <div className="flex flex-col">

                <div className="flex justify-between">
                    <div className="flex flex-col p-16 gap-16">
                        <span className="text-lg">  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <u className="text-logo">potenti diam</u> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
                        </span>
                        <u>  
                            Lorem ipsum 
                        </u>
                    </div>

                    <div className="flex flex-col p-16 gap-16">
                        <span className="text-lg">  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <u className="text-logo">potenti diam</u> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
                        </span>
                        <u>  
                            Lorem ipsum 
                        </u>
                    </div>
                </div>

                <img src={banner} alt="" />

            </div>
        </div>
    )
}