import Tabs from "../Tabs"
import Container from "../Container"

export default function OfferSection() {
    return (
        <div className="bg-white w-full h-screen flex flex-col px-12 py-10 gap-6">
            <Tabs />
            <div className="flex flex-col text-center gap-5">
                <h2 className="font-bold text-3xl text-black">We make it easy for houses and apartments.</h2>
                <span className="text-zinc-300 text-base">Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</span>
            </div>
            <div className="flex gap-3 overflow-scroll">
                <Container hasBorder />
                <Container hasBorder />
                <Container hasBorder />
            </div>
        </div>
    )
}