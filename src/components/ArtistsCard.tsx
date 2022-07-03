import artista01 from "../assets/artista-1.png"
import classNames from "classnames"

interface ArtistsCardProps {
    principal: boolean
}

export function ArtistsCard(props: ArtistsCardProps){
    return(
        <div className={classNames("w-full max-w-[350px] bg-card flex gap-10 items-center px-8 py-6", {
            "bg-logo": props.principal
        })}>
            <img src={artista01} alt="" />

            <div className="flex flex-col gap-3">
                <span className="block text-xl font-normal">
                    João Victor
                </span>

                <span className={classNames("text-xl font-normal text-logo",{
                    "text-white": props.principal
                })}>
                    80 Fotografias
                </span>
            </div>
        </div>
    )
}