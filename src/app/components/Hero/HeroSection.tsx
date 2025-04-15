import Image from 'next/image'
import Container from "../Container"
import Navbar from '../Navbar'
import bigMapImage from '../../../public/images/mapBig.png'

export default function HeroSection() {
    return (
        <div className="bg-white w-full h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col lg:flex-row">
                <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full justify-center px-10 py-7 gap-7 text-center lg:text-left bg-radial-[at_80%_40%] from-indigo-50 to-white lg:bg-radial-[at_35%_75%] lg:from_indigo-50 lg:to-white">
                    <h1 className="font-bold text-4xl lg:text-6xl text-black">Buy, rent, or sell your propery easily</h1>
                    <h3 className="font-normal text-lg text-black">A great platform to buy, sell, or even rent your properties without any commisions.</h3>
                    <div className="flex justify-center lg:justify-start gap-5">
                        <div className="h-auto w-[2px] bg-zinc-300"></div>
                        <div className="flex flex-col gap-2 mr-18">
                            <span className="font-bold text-3xl text-indigo-400">50k+</span>
                            <span className="font-normal text-sm text-zinc-300">renters</span>
                        </div>
                        <div className="h-auto w-[2px] bg-zinc-300"></div>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-3xl text-indigo-400">10k+</span>
                            <span className="font-normal text-sm text-zinc-300">properties</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full justify-center items-center">
                    <Image src={bigMapImage} alt='house image' className='w-95 h-95 lg:w-full lg:h-full lg:object-cover' />
                    <Container top={100} right={100} />
                </div>
            </div>
        </div>
    )
}