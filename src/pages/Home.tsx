import { BestsArtists } from "../components/BestsArtists";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Popular } from "../components/Popular";
import { Statistics } from "../components/Statistics";

export function Home() {
    return(
        <div>
            <div className="w-full bg-background bg-center bg-no-repeat bg-cover">
                <Header />
                <MainContent />
                <Gallery />
            </div>
            <div className="flex flex-col gap-40">
                <Statistics />
                <Popular />
                <BestsArtists />
                <Footer />
            </div>
        </div>
    )
}