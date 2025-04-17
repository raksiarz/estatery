import Image from 'next/image'
import Container from "../Container"
import Navbar from '../Navbar'
import bigMapImage from '../../../public/images/mapBig.png'
import houseImage from '../../../public/images/apartament3.png'

export default function HeroSection() {
    return (
        <div className="bg-white w-full h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 max-h-full flex-col lg:grid lg:grid-cols-2">
                <div className="flex flex-col justify-center h-full px-10 py-7 gap-7 lg:gap-12 text-center lg:pr-35 xl:pr-68 lg:text-left bg-radial-[at_80%_40%] from-indigo-50 to-white lg:bg-radial-[at_35%_75%] lg:from_indigo-50 lg:to-white">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black animate-fade-in">Buy, rent, or sell your propery easily</h1>
                    <h3 className="font-normal text-lg lg:text-2xl text-black animate-fade-in">A great platform to buy, sell, or even rent your properties without any commisions.</h3>
                    <div className="flex justify-center lg:justify-start gap-3 lg:gap-5 animate-fade-in">
                        <div className="h-auto w-[3px] bg-zinc-300"></div>
                        <div className="flex flex-col gap-2 mr-18 items-start justify-center">
                            <p className="font-bold text-3xl lg:text-4xl text-indigo-400">50k+</p>
                            <p className="font-normal text-sm lg:text-lg text-zinc-400">renters</p>
                        </div>
                        <div className="h-auto w-[3px] bg-zinc-300"></div>
                        <div className="flex flex-col gap-2 items-start justify-center">
                            <p className="font-bold text-3xl lg:text-4xl text-indigo-400">10k+</p>
                            <p className="font-normal text-sm lg:text-lg text-zinc-400">properties</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-full w-full'>
                    <div className='w-75 h-75 lg:w-full lg:h-full overflow-hidden relative'>
                        <Image src={bigMapImage} alt='house image' className="h-full w-full object-cover absolute right-0"/>
                    </div>
                    <div className='absolute left-[-5%] sm:left-[23%] bottom-[7%] lg:left-[39%] xl:left-[40%] lg:top-[25%]'>
                        <Container
                            price='2,700'
                            name='Beverly Springfield'
                            description='2821 Lake Sevilla, Palm Harbor, TX'
                            image={houseImage}
                            inHero
                            shadow
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}